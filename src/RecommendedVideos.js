import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";

const RecommendedVideos = (props) => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="In The End - Linkin Park"
          views="1.2M Views"
          timeStamp="2 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://c-fa.cdn.smule.com/rs-s-sf-3/arr/87/f9/a843f081-8bf1-42c6-94ac-35a6efde7648.jpg"
        />
        <VideoCard
          title="Lose Yourself - Eminem"
          views="4.2M Views"
          timeStamp="3 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://c-cl.cdn.smule.com/rs-s42/arr/10/74/35b1c12c-f221-41de-aa63-40db1d18acab.jpg"
          // image="https://images.indianexpress.com/2021/06/YouTube-logo.jpg"
        />
        <VideoCard
          title="My Ambitionz Az A Ridah - Tupac"
          views="2M Views"
          timeStamp="7 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://pbs.twimg.com/profile_images/378800000214936115/bd6994c233bf1fe676d4958c62db6838.jpeg"
        />
        <VideoCard
          title="In Da Club - 50 Cent"
          views="6.3M Views"
          timeStamp="9 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://c-fa.cdn.smule.com/rs-s50/arr/e2/6e/9f200eca-a8ae-4f33-957f-6702a971e5bb.jpg"
        />
        <VideoCard
          title="Window Shopper - 50 Cent"
          views="1.9M Views"
          timeStamp="4 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://c-cl.cdn.smule.com/rs-s20/arr/c9/14/f5608ab2-9694-4243-9119-f4021ae58bb7.jpg"
        />
        <VideoCard
          title="Jus a lil bit - 50 Cent"
          views="12M Views"
          timeStamp="11 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://pbs.twimg.com/profile_images/2659735356/ffba0c2ef0892fac7b97ab04efb05c21.jpeg"
        />
        <VideoCard
          title="Blackbird - Alter Bridge"
          views="12M Views"
          timeStamp="11 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://c-fa.cdn.smule.com/rs-s24/arr/78/3e/17527ebe-a7f9-4cc0-a7b8-6d962ab0bcde.jpg"
        />
        <VideoCard
          title="Open Your Eyes - Alter Bridge"
          views="12M Views"
          timeStamp="11 days ago"
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzbexzpqGRqxl4dA5j7cYo5yJTdIjiRI4iyg&usqp=CAU"
          channel="Fozzy"
          image="https://c-fa.cdn.smule.com/rs-s79/arr/a9/aa/e8164ee7-9e0b-42b1-9c45-48b4cee5e444.jpg"
        />
      </div>
    </div>
  );
};

export default RecommendedVideos;
