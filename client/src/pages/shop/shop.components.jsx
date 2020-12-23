import React, {useEffect} from "react";
import {Route} from "react-router-dom";
import CollectionsContainer from "../collections/collections.container";
import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";


import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";


const ShopPage = ({fetchCollectionsStart, match})=> {
  useEffect(()=>{
    fetchCollectionsStart();
  },[fetchCollectionsStart]);
  
    return (
        <div className= "shop-page">   
        <Route exact 
          path=  { `${match.path}`} 
          component= {CollectionsOverviewContainer} />
        <Route exact 
          path= { `${match.path}/:collectionId`}  
          component= {CollectionsContainer} />
        </div>
    )
  }  





const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
    
   

