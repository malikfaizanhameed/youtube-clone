import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://img.kytary.com/eshop_ie/velky_v2/na/637299957869830000/1a862cc9/64763211/kohala-full-size-steel-string-acoustic-guitar.jpg"
        channel="YouTube Channel"
        verified
        subs="560K"
        noOfVideos={235}
        description="Awsome videos in this channel! You will find a bunch of videos related to Rock and Hip Hop with the likes of 50 cent and LinkingPark!"
      />
      <hr />
      <VideoRow
        subs="500K"
        views="2M"
        description="Rock music from the early 90s when this genre was the main thing in the market."
        timestamp="2 days ago"
        channel="Fozzy"
        title="Title of the video"
        image="https://c-fa.cdn.smule.com/rs-s-sf-3/arr/87/f9/a843f081-8bf1-42c6-94ac-35a6efde7648.jpg"
      />
      <VideoRow
        subs="200"
        views="22M"
        description="Rock music from the early 90s when this genre was the main thing in the market."
        timestamp="20 days ago"
        channel="Fozzy"
        title="Title of the video number 2"
        image="https://c-fa.cdn.smule.com/rs-s-sf-3/arr/87/f9/a843f081-8bf1-42c6-94ac-35a6efde7648.jpg"
      />
    </div>
  );
};

export default SearchPage;
