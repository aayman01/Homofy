import chosse from '../assets/chosse.jpg';

const WhyChooseUs = () => {
    return (
      <div className="max-w-6xl mx-auto px-8">
        <div>
          <img src={chosse} alt="" />
        </div>
        <div className="bg-slate-50 p-3">
          <li className="text-[#00C194] font-bold text-xl">WHY CHOOSE OUR PROPERTIES</li>
        </div>
      </div>
    );
};

export default WhyChooseUs;