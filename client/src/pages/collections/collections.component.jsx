import React from "react";
import {connect } from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.components";

import CollectionsPageStyled from "./collections.styles";

const CollectionsPage = ({collection}) => {




    const {title, items} = collection;
    return (
        <CollectionsPageStyled>
        <h2 className="title">{title}</h2>
        <div className= "items">
        {
            items.map(item => (
                <CollectionItem  key={item.id} item={item}/>)
            )
        }
        </div>

        </CollectionsPageStyled>
);}

const mapStateToProps=(state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});



export default connect(mapStateToProps)(CollectionsPage);