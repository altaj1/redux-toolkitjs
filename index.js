const { createStore } = require("redux");
// defining constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// state
const initialCoounterState = {
    users:["altaj"],
    count:1,
};
// action - Object - type, payload
const incrementCounter = () =>{
    return{
        type : INCREMENT,
    }
}
const decrementCounter = ()=>{
    return{
        type:DECREMENT,
    }
}
const addUser = (user)=>{
    return{
        type:ADD_USER,
        payload:user
        
    }
}
// create reducer for counter 
const counterReducer = (state = initialCoounterState, action) =>{
    switch(action.type){
        case INCREMENT: return{
            ...state,
            count : state.count + 1,
        };
        case DECREMENT: return {
            ...state,
            count: state.count - 1,
        };
        case ADD_USER:return{
            users: [...state.users, action.payload],
            count:state.count +1
        }
        // default :state;
    }
}
// create store
const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState());
});
// dispatch action
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(incrementCounter());
// store.dispatch(decrementCounter());
store.dispatch(addUser('Rafik'));
store.dispatch(addUser('Amrita'));