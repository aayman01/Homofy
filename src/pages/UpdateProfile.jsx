import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import Navbar from "./Shared/Navbar";
import { useForm } from "react-hook-form";
import { updateProfile } from "firebase/auth";
import auth from "../FireBase/FireBase.config";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const { photoURL, displayName } = user;


  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: user.displayName,
      photoUrl: user.photoURL,
    },
  });

  const onSubmit = (data) => {
    const { userName, photoUrl } = data;

    updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: photoUrl,
    })
      .then()
      .catch();
  };
  return (
    <div>
      <Helmet>
        <title>Homofy | Update profile</title>
      </Helmet>
      <div className="h-20">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto px-8">
        <div className="mt-14 ">
          <div className=" flex flex-col md:flex-row gap-7 items-center mb-10">
            <img
              className="md:w-[200px] md:h-[200px] rounded-full border-2 p-1 border-[#00C194]"
              src={user.photoURL}
              alt=""
            />
            <div className="font-bold border p-4 rounded-lg  bg-[#00C194] text-white">
              <p className="">Username: {displayName}</p>
              <p className="">Email: {user?.email}</p>
              {/* <p className="">photoURL: {user?.photoURL}</p> */}
              {photoURL.length > 50 ? (
                <p>
                  PhotoURL:
                  {photoURL.slice(0, 35)}...
                </p>
              ) : (
                <p>PhotoURL: {photoURL}</p>
              )}
            </div>
          </div>
          <div className="mb-20">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="input input-bordered"
                  required
                  {...register("userName")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                  {...register("photoUrl")}
                />
              </div>
              <div className="flex justify-end mt-3">
                <button className="btn border-0 bg-[#00C194] text-white font-semibold ">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
