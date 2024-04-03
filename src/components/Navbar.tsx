import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const navLinks = [
  "LiveShows",
  "Streams",
  "Movies",
  "Plays",
  "Events",
  "Sports",
  "Activities",
];

const Navbar = () => {
    var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll:4,
  };
  return (
    < div className="mt-6 text-fontSubtitle w-full mx-auto flex flex-col gap-4 mb-4 font-inter">
      {/* nav1 */}
      <div className="flex justify-between">
        {/* logo */}
        <div className="flex flex-col gap-1">
          <div className="text-logoColor text-2xl font-bold">BookUsNow</div>
          <div className="flex md:hidden gap-1  items-center text-fontSubTitle font-semibold">
            <FaLocationDot />
            <div className="flex  items-center gap-1">
              Mumbai,India <FaChevronRight size={15} />
            </div>
          </div>
        </div>
        {/* categories/searchbar */}
        <div className="space-x-4 flex ">
          <button className="md:flex hidden items-center gap-2 px-6 py-2 rounded-md bg-black text-white">
            <GiHamburgerMenu />
            Categories
          </button>
          <div className="md:flex relative hidden">
            <input
              placeholder="DJI phantom"
              className="border border-borderColor pl-2 pr-60"
            ></input>
            <CiSearch className="absolute right-4 top-1 hover:cursor-pointer" size={30} />
          </div>
        </div>
        {/* fav/signin buttons */}
        <div className="md:flex gap-7 text-fontHeading font-semibold hidden">
          <button className="border boerder-borderColor px-3 py-2 rouded-md flex items-center gap-2 hover:cursor-pointer">
            <FaHeart />
            Favourites
          </button>
          <button className="border boerder-borderColor px-3 py-2 rouded-md hover: cursor-pointer">
            Sign in
          </button>
        </div>

        {/* icons for mobile view */}
        <div className="flex items-center gap-3 md:hidden">
          <CiSearch size={30} className="hover:cursor-pointer"/>
          <FaHeart size={30} className="hover:cursor-pointer"/>
          <IoMdContact size={30} className="hover:cursor-pointer" />
        </div>
      </div>
      {/* nav2 */}
      <div className="md:flex w-full hidden">
        {/* icon */}
        <div className="flex  gap-2 justify-between items-center text-fontSubTitle font-semibold">
          <div>
            <FaLocationDot />
          </div>
          <div>Mumbai,India</div>
        </div>
        <div className="flex justify-center  w-full text-fontSubtitle font-semibold">
          <div className="flex justify-between w-[50%] items-center ">
            {navLinks.map((ele, index) => {
              return <p key={index}>{ele}</p>;
            })}
          </div>
        </div>
      </div>
      {/* nav2 for mobile view*/}
      <Slider {...settings} className="block md:hidden">
        {
          navLinks.map((nav,idx)=>(
            <div key={idx}>{nav}</div>
          ))
        }
    </Slider>
    </div>
  );
};

export default Navbar;
