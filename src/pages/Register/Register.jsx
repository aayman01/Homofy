import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {createUser} = useContext(AuthContext)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    const { password, email, yourName, photoUrl } = data;

    setError("");
    
    // password validation

    if(password.length < 6){
      setError("Password should be atlest 6 characters or longer")
      return;
    }
    else if (!/[A-Z]/.test(password)){
      setError("Your password should contain atleast one capital letter");
      return;
    }
    else if (!/^(?=.*[a-z]).+$/.test(password)){
      setError('Your password should contain atleast one small letter');
      return;
    }


    // create user with email and password

      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: yourName,
            photoURL: photoUrl,
          })
            .then()
            .catch();
          toast.success("Successfully registered!");
          setTimeout(()=>navigate("/login"),1500);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    e.target.reset();
  };
    return (
      <div>
        <Helmet>
          <title>Homofy | Register</title>
        </Helmet>
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
                  <span className="text-red-500 mt-2">
                    This field is required
                  </span>
                )}
                {error && <p className="text-red-700 text-sm">{error}</p>}
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
              <Toaster position="top-right" reverseOrder={false} />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;