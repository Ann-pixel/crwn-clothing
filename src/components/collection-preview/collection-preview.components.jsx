import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.components";

const CollectionPreview = ({title, items}) =>(
    <div className ="collection-preview">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <div className ="preview">
            {items.filter((item, idx) => idx<4).map(({id, ...otherItemPreview}) =>(
            <CollectionItem key={id} {...otherItemPreview} />    
            ))}
        </div>
    </div>
)
export default CollectionPreview;