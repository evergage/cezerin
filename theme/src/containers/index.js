import React from 'react';
import HomeSlider from '../components/homeSlider';
import MetaTags from '../components/metaTags';
import { themeSettings } from '../lib/settings';
import { EvergageRecommendations } from "./evergageRecommendations";
import { EvergageRecommendationsWithAdmc } from "./evergageRecommendationsWithAdmc";
const Fragment = React.Fragment;

const IndexContainer = (props) => {
  const {pageDetails, categories, settings} = props.state;
  const {addCartItem} = props;

  return (
    <Fragment>
      <MetaTags
        title={pageDetails.meta_title}
        description={pageDetails.meta_description}
        canonicalUrl={pageDetails.url}
        ogTitle={pageDetails.meta_title}
        ogDescription={pageDetails.meta_description}
      />

      <HomeSlider images={themeSettings.home_slider} />

      {pageDetails.content && pageDetails.content.length > 10 &&
        <section className="section">
          <div className="container">
            <div className="content">
              <div dangerouslySetInnerHTML={{
                __html: pageDetails.content
              }}/>
            </div>
          </div>
        </section>
      }

      <section className="section">
      <div className="container">
          <div className="title is-4 has-text-centered">Evergage Beacon Replaced Content Recommendations</div>
          <div id="recommendations-test"></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="title is-4 has-text-centered">Evergage React Static Component Recommendations</div>
          <EvergageRecommendations campaignName="Recommendations Testing" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="title is-4 has-text-centered">Evergage React Dynamic Rendered Content Component Recommendations</div>
          <EvergageRecommendationsWithAdmc campaignName="Recommendations Testing" />
        </div>
      </section>

    </Fragment>
  )
}

export default IndexContainer
