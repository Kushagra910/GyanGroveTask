import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


interface Event {
  eventName: string;
  imgUrl: string;
  date: string;
  cityName: string;
  weather: string;
  distanceKm: string;
}
const apiUrl = import.meta.env.VITE_API_URL;
const code = import.meta.env.VITE_API_CODE1;

const EndCards: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${apiUrl}?code=${code}&page=${page}&type=upcoming`);
        const newEvents = response.data.events;
        if (newEvents.length === 0) {
          setReachedEnd(true);
        } else {
          setEvents((prevEvents) => [...prevEvents, ...newEvents]);
          setPage((prevPage) => prevPage + 1);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.offsetHeight;
      if (scrollPosition >= scrollHeight && !loading && !reachedEnd) {
        fetchEvents();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, reachedEnd]);

  const getDirectImageUrl = (url: string) => {
    // Extract the file ID from the Google Drive URL
    const fileId = url.match(/\/file\/d\/(.+?)\/view/)?.[1];
    const thumbnailUrl = fileId
      ? `https://drive.google.com/thumbnail?id=${fileId}`
      : "";
    return thumbnailUrl;
  };

  return (
    <div className="w-full font-inter">
      <h1 className="text-fontHeading font-bold text-xl mb-4 flex  items-center gap-2">Upcoming Events <FaArrowRightLong size={20}/></h1>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap  gap-10">
        {events.map((event, index) => (
          <div
            key={index}
            className="border border-borderColor p-4 flex flex-col rounded-md  md:w-[30%] justify-center items-center"
          >
            <div className="relative w-full">
              <img
                src={getDirectImageUrl(event.imgUrl)}
                alt={event.eventName}
                width={400}
                className="object-cover"
              />
              <div className="absolute rounded-md md:bottom-5 left-3 md:left-5 bottom-3 text-white bg-fontHeading opacity-60 p-3 w-[91%] md:w-[87%]">
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </div>
            </div>
            <div className=" w-10/12">
              <p className="md:text-lg text-base text-fontHeading font-semibold mb-3">{event.eventName}</p>
              <p className="flex justify-between text-fontSubtitle gap-1 md:gap-4 font-semibold text-sm md:text-base w-full">
                <span className="flex items-center gap-1 md:gap-2 w-full"><FaLocationDot/>{event.cityName}</span>
                <span className="w-full">
                  {event.weather} | {event.distanceKm.slice(0, 2)} km
                </span>
              </p>
              
            </div>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default EndCards;
