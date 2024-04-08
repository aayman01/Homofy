import Banner from "./Banner";
import Navbar from "./Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <h2 className="text-4xl">Home section</h2>            
        </div>
    );
};

export default Home;