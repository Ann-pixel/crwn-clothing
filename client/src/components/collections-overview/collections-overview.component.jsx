import React from "react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "../collection-preview/collection-preview.components";
import {selectShopCollectionForPreview} from "../../redux/shop/shop.selector";
import CollectionsOverviewStyled from "./collections-overview.styles";

const CollectionsOverview =({collection}) =>(

<CollectionsOverviewStyled>
        {
            collection.map(({id, ...otherCollectionItems}) =>(
                <CollectionPreview key={id} {...otherCollectionItems} />
            ))
        }
</CollectionsOverviewStyled>
);

const mapStateToProps = createStructuredSelector({
    collection: selectShopCollectionForPreview
  }); 
export default connect(mapStateToProps)(CollectionsOverview);







