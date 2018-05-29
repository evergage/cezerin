import React from 'react';
import EvergagePersonalize, { PersonalizeTypes } from "react-evergage-personalize";

export class EvergageRecommendationsWithAdmc extends React.Component{

  constructor(){
    super();

    this.state = {
      markup: ''
    };

    this.handleExperienceResponse = this.handleExperienceResponse.bind(this);
  }

  componentDidMount(){
    window.Evergage.addExperienceListener(this.handleExperienceResponse);
  }

  handleExperienceResponse(statId, statType, message){
    if(message.campaignName === this.props.campaignName){
      this.setState({markup: message.htmlContent})
    }
  }
  render(){
    return (
      <div dangerouslySetInnerHTML={{ __html: this.state.markup }} />
    );
  }
}
