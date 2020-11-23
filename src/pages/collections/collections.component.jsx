import React from "react";
import "./collections.styles.scss";
import {connect } from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.components";


const CollectionsPage = ({collection}) => {
    console.log(collection);
    return (
    <div className = "collections-page">
        <h2>collections Page</h2>


    </div>
);}

const mapStateToProps=(state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});



export default connect(mapStateToProps)(CollectionsPage);