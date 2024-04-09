import { Link } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Login = () => {
  return (
    <div>
      <div className="h-20">
        <Navbar />
      </div>
      {/* #eaf7f4 */}
      <h2 className="text-3xl font-bold mt-7 text-center my-7">
        Login your account
      </h2>
      <div className=" lg:w-1/2 md:w-3/4 mx-auto shadow-2xl rounded-lg bg-[#eaf7f4] mt-12 mb-20">
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <p className="label-text text-lg">
                E-mail <span className="text-red-600">*</span>{" "}
              </p>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-lg">
                Password <span className="text-red-600">*</span>{" "}
              </p>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#00C194] text-lg text-white">
              Login
            </button>
          </div>
          <p className="text-center mt-6">
            Do not have an account? 
            <Link className="text-[#11828d] font-semibold" to="/register">
             {" "}Register
            </Link>{" "}
          </p>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
