import SHOP_DATA from "./shop.data";

const initialState ={
    collection: SHOP_DATA
};

const shopReducer =(state =initialState, action)=>{
    switch (action.payload){
        default:
            return state;
    };  
}
export default shopReducer;
