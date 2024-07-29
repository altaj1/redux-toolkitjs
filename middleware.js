const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
// product constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";
// product state 
const initialProductState = {
    products:['suger', 'salt'],
    numberOfProduct: 2,
}
//get PRODUCT action
const getproductAction = ()=>{
    return{
        type:GET_PRODUCTS,
    }
}
// add product action
const addProductAction =(product)=>{
    return{
        type: ADD_PRODUCTS,
        payload:product
    }
}
const productsReducer = (state = initialProductState, action)=>{

switch(action.type){
    case GET_PRODUCTS: return{
        ...state,
    }
    case ADD_PRODUCTS: return {
        product: [...state.products , action.payload],
        numberOfProduct: state.numberOfProduct +1,
    }
    default: return state;
}
}

const store = createStore(productsReducer, applyMiddleware(logger))
store.subscribe(() => {
    console.log(store.getState());
  });
// store.dispatch(getproductAction())
store.dispatch(addProductAction("pen"));
