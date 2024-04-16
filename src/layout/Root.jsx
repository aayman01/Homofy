import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import ScrollToTop from "../pages/utility/ScrollToTop";

const Root = () => {
  return (
    <div>
      <ScrollToTop/>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
