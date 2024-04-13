import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {

  const {createUser} = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password, email} = data;

    console.log(data)
    createUser(email, password)
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
        <div>
          {/* #eaf7f4 */}
          <h2 className="text-3xl font-bold mt-7 text-center my-7">
            Register your account
          </h2>
          <div className=" lg:w-1/2 md:w-3/4 mx-auto shadow-2xl rounded-lg bg-[#eaf7f4] mt-12 mb-20">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-lg">
                    Name <span className="text-red-600">*</span>{" "}
                  </p>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  {...register("yourName", { required: true })}
                />
                {errors.yourName && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-lg">
                    E-mail <span className="text-red-600">*</span>{" "}
                  </p>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-lg">
                    PhotoURL <span className="text-red-600">*</span>{" "}
                  </p>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photoUrl", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
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
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
                {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#00C194] text-lg text-white">
                  Register
                </button>
              </div>
              <p className="text-center mt-4">
                Already have an account?
                <Link className="text-[#11828d] font-semibold" to="/login">
                  {" "}
                  Log in
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;