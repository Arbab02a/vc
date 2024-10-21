import React from 'react';

const Mission = () => {
  return (
    <section className="text-gray-400 bg-[#000319] body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded " alt="hero" src="/images/mission.jpg" />
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Our Mission</h1>
        <p className="leading-relaxed mb-8 ">
        Our foremost objective is to perfect each outcome the client demands by delivering brilliant solutions, defining the value-creating market 💼, and striving to meet every goal 🎯. We are committed to creating long-lasting relationships with our clients based on trust and excellence 🤝.
        </p>
        
      </div>
    </div>
  </section>
  
  );
};

export default Mission;
