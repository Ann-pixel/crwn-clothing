import ShopActionTypes from "./shop.types.js";



const initialState ={
    collection: null
};

const shopReducer =(state =initialState, action)=>{
    switch (action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return{
                ...state,
                collection: action.payload
            }



        default:
            return state;
    };  
}
export default shopReducer;
