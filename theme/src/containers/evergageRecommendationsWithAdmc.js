import React from 'react';
import EvergagePersonalize, { PersonalizeTypes } from "react-evergage-personalize";

export const EvergageRecommendationsWithAdmc = (props) => {
    return (  
        <EvergagePersonalize type={PersonalizeTypes.Product} campaign={props.campaignName} render={({markup}) => {
            console.log("markup => ", markup)
            return (
                <div>
                    <div dangerouslySetInnerHTML={{ __html: markup }} />
                </div>
            )
        }}/>
    )
}