import React from "react";
import MenuItemStyled from "./menu-item.styles";

import {withRouter} from "react-router-dom";
const MenuItem= ({title, imageUrl, size, history, linkUrl, match}) =>(
    <MenuItemStyled className= {size} 
         onClick= {() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" 
            style ={{backgroundImage: `url(${imageUrl})`}}
        />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
    </MenuItemStyled>
)
export default withRouter(MenuItem);