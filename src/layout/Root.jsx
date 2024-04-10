import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
