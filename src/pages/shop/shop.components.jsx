import React from "react";
import shopData from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.components";
class shopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: shopData 
        };
    }
    render(){
        const {collections} = this.state;
        return (<div className= "shop-page">
       
       
        {
            collections.map(({id, ...otherCollectionItems}) =>(
                <CollectionPreview key={id} {...otherCollectionItems} />
            ))
        }
        </div>);

        
    }
}
export default shopPage;
