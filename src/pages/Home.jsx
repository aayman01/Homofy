import { Helmet } from "react-helmet-async";
import EstateSection from "../Components/EstateSection";
import Banner from "./Banner/Banner";
import Navbar from "./Shared/Navbar";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Homofy | Home</title>
      </Helmet>
      <Navbar />
      <Banner />
      <EstateSection />
    </div>
  );
};

export default Home;
