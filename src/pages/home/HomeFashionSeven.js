import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderFifteen from "../../wrappers/hero-slider/HeroSliderFifteen";
import TabProductNine from "../../wrappers/product/TabProductNine";
import BannerEleven from "../../wrappers/banner/BannerEleven";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";

const HomeFashionSeven = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderFifteen />

         {/* featured icon */}
         <FeatureIcon spaceTopClass="pt-100"  />

        {/* tab product */}
        <TabProductNine
          category="fashion"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
        <BannerEleven />

       

        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-100"
          dateTime="October 30, 2022 12:12:00"
          countDownImage="/assets/img/banner/deal-2.png"
        />
       
        
        {/* Brand logo slider  */}
        <BrandLogoSliderOne spaceBottomClass="pt-95" />
        
         {/* blog featured */}
         <BlogFeatured spaceTopClass="pt-55" />

        
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionSeven;
