import React from "react";
import { FaLocationDot } from "react-icons/fa6";

interface CardProps {
  idx: number;
  ele: {
    eventName: string;
    imgUrl: string;
    date: string;
    cityName: string;
    weather: string;
    distanceKm: string;
  };
}

const Card: React.FC<CardProps> = ({ idx, ele }) => {
  // Extract the file ID from the Google Drive URL
  const fileId = ele.imgUrl.match(/\/file\/d\/(.+?)\/view/)?.[1];
  const thumbnailUrl = fileId
    ? `https://drive.google.com/thumbnail?id=${fileId}`
    : "";

  // Parse the ISO 8601 date string
  const parsedDate = new Date(ele.date);
  const month = parsedDate.toLocaleString("default", { month: "long" });
  const dayOfMonth = parsedDate.getDate();
  const year = parsedDate.getFullYear();
  const formattedDate = `${month} ${dayOfMonth}, ${year}`;
  const distance = `${ele.distanceKm.slice(0,2)}km`;
 
  return (
    <div key={idx} className="w-full h-full font-inter">
      <div className=" h-full relative">
        <img src={`${thumbnailUrl}`} width={400} loading="lazy" className=" dobject-cover rounded-lg bg-transparent border-borderColor w-[80%] md:w-full "></img>
        <div className="w-11/12 leading-1 text-[12px] md:text-[14px] font-medium mx-auto absolute text-white  flex flex-col bottom-3  md:bottom-4 md:left-0  left-1  right-1 md:right-0 bg-backgroundColor bg-opacity-0 p-2 md:p-4">
          <div className="w-[80%] md:w-full flex justify-between">
            <div>{ele.eventName}</div>
            <div className="text-fontSubtitle text-[10px] md:text-[12px] ">{formattedDate}</div>
          </div>
          <div className="flex justify-between w-[79%] md:w-full text-fontSubtitle text-[12px]">
            <div className="flex items-center gap-1"><FaLocationDot/>{ele.cityName}</div>
            <div className="flex gap-1">
              <div>{ele.weather}</div>
              <div>{distance}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
