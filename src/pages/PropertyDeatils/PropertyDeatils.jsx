import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const PropertyDeatils = () => {
    const properties = useLoaderData();
    const {id} = useParams();
    const property = properties.find(property => property.id == id);
    console.log(property)
    return (
      <div>
        <div className="h-20">
          <Navbar />
        </div>
        <div>
          
        </div>
      </div>
    );
};

export default PropertyDeatils;