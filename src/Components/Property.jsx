import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { SlSizeFullscreen } from "react-icons/sl";
import { Link } from "react-router-dom";


const Property = ({ property }) => {
  
    const {
      estate_title,
      id,
      price,
      location,
      View_Property,
      status,
      bedrooms,
      bathrooms,
      area,
    } = property;
    
  return (
    <div className="card card-compact bg-base-100 shadow-xl mt-7">
      <figure>
        <img
          className="w-full h-[220px]"
          src={View_Property}
          alt={estate_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-semibold">{estate_title}</h2>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 flex items-center gap-1 mb-2">
            <FaLocationDot />
            {location}
          </p>
          <button className="bg-[#eaf7f4] btn text-black font-medium">{status}</button>
        </div>
        <p className="text-[#00C194] font-bold text-2xl">{price}</p>
        <hr />
        <div className="flex items-center justify-between text-base">
          <div className="flex items-center gap-1">
            <IoBedOutline className="text-[#00C194] bg-[#eaf7f4] p-1 rounded-full text-2xl" />
            <p className="text-gray-400">{bedrooms} Beds</p>
          </div>
          <div className="flex items-center gap-1">
            <FaBath className="text-[#00C194] bg-[#eaf7f4] p-1 rounded-full text-2xl" />
            <p className="text-gray-400">{bathrooms} Baths</p>
          </div>
          <div className="flex items-center gap-1">
            <SlSizeFullscreen className="text-[#00C194] bg-[#eaf7f4] p-1 rounded-full text-2xl" />
            <p className="text-gray-400">{area}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/property/${id}`}>
            <button className="btn bg-[#00C194] text-white font-semibold">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};


Property.propTypes = {
    property : PropTypes.object.isRequired
}
export default Property;
