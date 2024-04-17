import { Helmet } from "react-helmet-async";
import Navbar from "./Shared/Navbar";

const AddProperty = () => {
  return (
    <div>
      <Helmet>
        <title>Homofy | Add Property</title>
      </Helmet>
      <div className="h-20">
        <Navbar />
      </div>
      <div className="max-w-6xl mx-auto px-8 mt-10">
        <form>
          {/* 1st from */}

          <div className="bg-slate-100 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold text-[#00C194] mb-4">
              Property Description and price
            </h2>
            <hr />
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text font-medium">Property Title</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Inter your property title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text font-medium">
                  Property Description
                </span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Describe about your property"
                rows={5}
              ></textarea>
            </div>

            <div className=" flex justify-between gap-3 mt-3">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Property Title</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Area"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Area</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Sqft"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          {/* 2nd part */}
          <div className="bg-slate-100 p-4 rounded-lg mb-4 mt-5">
            <h2 className="text-xl font-bold text-[#00C194] mb-4">
              Property Location
            </h2>
            <hr />
            <div className=" flex justify-between gap-3 mt-3">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Address</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">city</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your city"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className=" flex justify-between gap-3 mt-3">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">State</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your state"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Country</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your country"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className=" flex justify-between gap-3 mt-3">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">
                    Google Maps Latitude
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Google Maps Latitude"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">
                    Google Maps Longitude
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Google Maps Longitude"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          {/* 3rd part */}
          <div className="bg-slate-100 p-4 rounded-lg mb-4 mt-5">
            <h2 className="text-xl font-bold text-[#00C194] mb-4">
              Contact Information
            </h2>
            <hr />
            <div className=" flex justify-between gap-3 mt-3">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Username</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your username"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className=" flex justify-between gap-3 mt-3">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text font-medium">Phone</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your phone"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <button className="btn border-0 bg-[#00C194] text-white font-semibold mt-6">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
