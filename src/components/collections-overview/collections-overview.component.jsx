import React from "react";
import "./collections-overview.styles.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.components";
import {selectShopCollectionForPreview} from "../../redux/shop/shop.selector";


const CollectionsOverview =({collection}) =>(

<div className="collections-overview">
        {
            collection.map(({id, ...otherCollectionItems}) =>(
                <CollectionPreview key={id} {...otherCollectionItems} />
            ))
        }
</div>
);

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollectionForPreview
  }); 
export default connect(mapStateToProps)(CollectionsOverview);






