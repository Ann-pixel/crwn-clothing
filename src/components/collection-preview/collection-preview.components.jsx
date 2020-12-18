import React from "react";

import CollectionItem from "../collection-item/collection-item.components";
import CollectionPreviewStyled from "./collection-preview.styles";
const CollectionPreview = ({title, items}) =>(
    <CollectionPreviewStyled>
        <h1 className="title"> {title.toUpperCase()} </h1>
        <div className ="preview">
            {items
            .filter((item, idx) => idx<4)
            .map((item) =>(
            <CollectionItem key={item.id} item={item} />    
            ))}
        </div>
    </CollectionPreviewStyled>
)
export default CollectionPreview;