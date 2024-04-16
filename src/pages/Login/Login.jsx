import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signInUser, googleLogIn, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then(() => {
        toast.success("Successfully logged in!");
        setTimeout(
          () => navigate(location?.state ? location.state : "/"),
          2000
        );
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then(() => {
        toast.success("Successfully logged in!");
        setTimeout(() => navigate(location?.state ? location.state : "/"),1700);
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Successfully logged in!");
        setTimeout(
          () => navigate(location?.state ? location.state : "/"),
          1700
        );
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div>
      <Helmet>
        <title>
          Homofy | Login
        </title>
      </Helmet>
      <div className="h-20">
        <Navbar />
      </div>
      {/* #eaf7f4 */}
      <h2 className="text-3xl font-bold mt-7 text-center my-7">
        Login your account
      </h2>
      <div className=" lg:w-1/2 md:w-3/4 mx-auto shadow-2xl rounded-lg bg-[#eaf7f4] mt-12 mb-20">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 mt-2">This field is required</span>
            )}
          </div>
          <div className="form-control relative">
            <label className="label">
              <p className="label-text text-lg">
                Password <span className="text-red-600">*</span>{" "}
              </p>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            <span
              className="absolute bottom-4 right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}
            </span>
            {errors.password && (
              <span className="text-red-500 mt-2">This field is required</span>
            )}
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
        </form>
        <p className="text-center text-gray-500 mb-4">-Or login with-</p>
        <div className="flex text-2xl items-center gap-3 justify-center">
          <button onClick={handleGoogleLogin}>
            <FcGoogle />
          </button>
          <button onClick={handleGithubLogin}>
            <FaGithub />
          </button>
        </div>
        <p className="text-center mt-4 pb-10">
          Do not have an account?
          <Link className="text-[#11828d] font-semibold" to="/register">
            {" "}
            Register
          </Link>{" "}
        </p>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Login;
