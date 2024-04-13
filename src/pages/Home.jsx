import EstateSection from "../Components/EstateSection";
import Banner from "./Banner/Banner";
import Navbar from "./Shared/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <EstateSection />
    </div>
  );
};

export default Home;
