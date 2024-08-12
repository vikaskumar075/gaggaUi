import React from "react";

const OurBranches = () => {
  return (
    <div className="text-white flex flex-col items-center gap-10 p-6" >
      <div className="font-bold text-3xl text-center" data-aos="flip-right">Our Affiliated Branches</div>
      <p className="font-semibold text-xl w-full max-w-screen-lg text-center" data-aos="flip-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vitae
        inventore distinctio repudiandae beatae error. Inventore debitis dicta
        consequatur amet rerum, praesentium nisi? Vel, reiciendis.
      </p>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex flex-col items-center lg:items-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1723447673136!5m2!1sen!2sin" 
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-4 lg:mb-0" data-aos="flip-right"
          ></iframe>
          <div className="font-bold p-2 flex flex-row gap-2 lg:gap-4 text-center lg:text-left">
            <address>Kanpur Office</address>
            <address>Phone no: 5678998765</address>
            <address>Email Id: xyz@gmail.com</address>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089868012!2d77.46612713338561!3d12.953945614765903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1723447807076!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-4 lg:mb-0" data-aos="flip-left"
          ></iframe>
          <div className="font-bold p-2 flex flex-row gap-2 lg:gap-4 text-center lg:text-left">
            <address>Noida Office</address>
            <address>Phone no: 5678998765</address>
            <address>Email Id: xyz@gmail.com</address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
