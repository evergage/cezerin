import React from 'react';
import EvergagePersonalize, { PersonalizeTypes } from "react-evergage-personalize";

//PersonalizeTypes.Product (Product level recommendations) is the only recommendation type available right now 

export const EvergageRecommendations = (props) => {
    return (  
        <EvergagePersonalize type={PersonalizeTypes.Product} campaign={props.campaignName} render={({keys, items}) => {

            //keys are the unique identifiers of the recommended products
            //items are the items themselves. Available data will be based on what the item block you have chosen pulls in. The more data it gets the more you get.

            return (
                <div className="columns is-multiline is-mobile products">
                    {items.map((item, i) => {
                        return (
                            <div key={item.name + i} className="column is-6-mobile is-4-tablet is-3-desktop is-3-widescreen is-3-fullhd available">
                                <a aria-current="false" href={item.url}>
                                    <figure className="image" style={{ height: "220px" }}>
                                        <img src={item.imageUrl} alt={item.name} title={item.name}/>
                                    </figure>
                                    <div className="content product-caption">
                                        <div className="product-name">{item.name}</div>
                                        <div className="product-price">${item.price}</div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            )
        }}/>
    )
}