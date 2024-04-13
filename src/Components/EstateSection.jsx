import { useEffect, useState } from "react";
import Property from "./Property";

const EstateSection = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProperties(data))
    },[])
    return (
      // className=""
      <div className="bg-[#00C194]">
        <div className=" max-w-6xl mx-auto py-14 px-10 my-16 rounded-lg">
          <h3 className="text-white font-bold text-xl text-center">
            OUR PROPERTIES
          </h3>
          <h2 className="text-white font-bold text-3xl text-center mb-5">
            Propertiey For Rent
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Property key={property.id} property={property}></Property>
            ))}
          </div>
        </div>
      </div>
    );
};

export default EstateSection;