import { useContext } from "react";
import { AuthContext } from "../pages/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { PropTypes } from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if(loading){
    return (
      <div className="flex min-h-screen justify-center items-center">
        <ClipLoader color="rgba(54, 215, 183, 1)" size={50} />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;