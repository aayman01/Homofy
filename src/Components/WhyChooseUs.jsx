import chosse from '../assets/chosse.jpg';
import { IoMdCheckmark } from "react-icons/io";


const WhyChooseUs = () => {
    return (
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center gap-3 mb-11">
          <div className="w-full md:w-1/2">
            <img src={chosse} alt="" />
          </div>
          <div className="p-3 w-full md:w-1/2 space-y-3">
            <li className="text-[#00C194] font-bold text-xl">
              WHY CHOOSE OUR PROPERTIES
            </li>
            <h2 className="font-bold text-xl">
              The experts in local and international property
            </h2>
            <p className="text-gray-400">
              Mastering the intricacies of local and international property
              markets, our team of experts brings unparalleled insight and
              proficiency to every transaction.
            </p>
            <p className="flex items-center gap-1 text-gray-400">
              <IoMdCheckmark className="text-[#00C194]" />
              Outstanding property
            </p>
            <p className="flex items-center gap-1 text-gray-400">
              <IoMdCheckmark className="text-[#00C194]" />
              Modern City Locations
            </p>
            <p className="flex items-center gap-1 text-gray-400">
              <IoMdCheckmark className="text-[#00C194]" />
              Specialist services
            </p>
            <p className="flex items-center gap-1 text-gray-400">
              <IoMdCheckmark className="text-[#00C194]" />
              Market-leading research
            </p>
            <button className="btn border-0 bg-[#00C194] text-white font-semibold">
              Read More
            </button>
          </div>
        </div>
      </div>
    );
};

export default WhyChooseUs;