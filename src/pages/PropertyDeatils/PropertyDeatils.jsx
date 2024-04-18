import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FaCube } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet-async";
import { Icon } from "leaflet";
import marker from "../../assets/marker-icon.png"

const PropertyDeatils = () => {
    const properties = useLoaderData();
    const {id} = useParams();
    const property = properties.find(property => property.id == id);

    const {
      estate_title,
      segment_name,
      description,
      status,
      price,
      area,
      bedrooms,
      bathrooms,
      location,
      facilities,
      View_Property,
      year_built,
      coordinates
    } = property;
    

    const customIcon = new Icon({
      iconUrl: marker,
      iconSize: [38, 38],
    });

    return (
      <div>
        <Helmet>
          <title>Homofy | Property Deatils</title>
        </Helmet>
        <div className="h-20">
          <Navbar />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <div className=" mt-9 relative">
            <img
              className=" w-full h-[500px] rounded-3xl "
              src={View_Property}
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-6xl font-bold text-center text-[#00C194]">
                {estate_title}
              </h2>
              <br />
            </div>
          </div>
          <div className="flex justify-between items-center px-4 pt-2">
            <h3 className="font-bold text-2xl ">{location}</h3>
            <div>
              <p className="text-2xl font-bold text-[#00C194]">{price}</p>
              <p className="text-gray-700 text-center">{area}</p>
            </div>
          </div>
          <div className="mt-5 rounded-lg px-4 mb-5">
            <h3 className="text-xl font-bold underline mb-2 decoration-[#00C194]">
              Description:
            </h3>
            <p className="font-normal text-gray-400">{description}</p>
          </div>
          <div className="px-4">
            <h3 className="text-xl font-bold underline mb-3 decoration-[#00C194]">
              Property type:
            </h3>

            {/* Property type */}
            <div className="flex flex-wrap gap-5 mb">
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Id no: <span className="font-medium">{id}</span>{" "}
              </p>
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Property Type:{" "}
                <span className="font-medium">{segment_name}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Property Status: <span className="font-medium">{status}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Property Price: <span className="font-medium">{price}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Property Area: <span className="font-medium">{area}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Bedrooms: <span className="font-medium">{bedrooms}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Bathrooms: <span className="font-medium">{bathrooms}</span>
              </p>
              <p className="flex items-center gap-1">
                <FaCube className="text-[#00C194]" />
                Year of build: <span className="font-medium">{year_built}</span>
              </p>
            </div>
          </div>
          {/* Facilities */}

          <div className="px-4 mt-5 mb-5">
            <h3 className="text-xl font-bold underline mb-3 decoration-[#00C194]">
              Facilities:
            </h3>
            {facilities.map((facility, idx) => (
              <p className="flex items-center gap-1" key={idx}>
                <IoMdCheckmarkCircle className="text-[#00C194]" />
                {facility}
              </p>
            ))}
          </div>

          {/* map */}
          <div className="px-4 mb-20">
            <h2 className="text-xl font-bold underline mb-5 decoration-[#00C194]">
              Map Location
            </h2>
            <MapContainer
              className="h-[400px] z-20"
              center={coordinates}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={coordinates} icon={customIcon}>
                <Popup>{location}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    );
};

export default PropertyDeatils;