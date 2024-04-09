import Banner from "./Banner/Banner";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <h2 className="text-4xl mt-7 mb-11">Home section</h2> 
            <Footer/>           
        </div>
    );
};

export default Home;