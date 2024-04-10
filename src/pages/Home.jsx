import Banner from "./Banner/Banner";
import Navbar from "./Shared/Navbar";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner />
        <h2 className="text-4xl mt-7 mb-11 h-96">Home section</h2>
    </div>
  );
};

export default Home;
