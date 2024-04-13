import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {
  const {signInUser} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;

    signInUser(email, password) 
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
  };

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
              {...register("password", { required: true })}
            />
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
          <p className="text-center text-gray-500 mt-3 mb-4">-Or login with-</p>
          <div className="flex text-2xl items-center gap-3 justify-center">
            <Link>
              <FcGoogle />
            </Link>
            <Link>
              <FaGithub />
            </Link>
            <Link className="text-blue-600">
              <FaFacebook />
            </Link>
          </div>
          <p className="text-center mt-4">
            Do not have an account?
            <Link className="text-[#11828d] font-semibold" to="/register">
              {" "}
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
