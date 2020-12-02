import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import {Route} from "react-router-dom";
import CollectionsPage from "../collections/collections.component";
import {connect} from "react-redux";
import { firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {updateCollections} from "../../redux/shop/shop.actions";
class ShopPage extends React.Component {
  
unsubscribeFromSnapshot = null;

componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot =>{
        const  collectionsMap =convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
    })

}




  render()  {
    const {match} = this.props;
    return (
        <div className= "shop-page">   
        <Route exact path=  { `${match.path}`} component= {CollectionsOverview} />
        <Route exact path= { `${match.path}/:collectionId`}  component={CollectionsPage} />
        </div>
    )
  }
   
    
} 


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
    
   

