import React from "react";
import { ContactCard } from "./ContactCard";
import { contactData } from "./ContactData";

function ContactSection() {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-b from-[#EEDEFD] to-white">
      <div className="flex flex-col flex-1 w-full max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-56 py-24 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col w-full max-w-[1200px] max-md:max-w-full">
            <div className="flex flex-wrap justify-center w-full text-center min-h-[162px] max-md:max-w-full">
              <div className="flex flex-col flex-1 shrink px-1.5 w-full basis-0 max-w-[990px] min-w-[240px] max-md:max-w-full">
                <div className="flex flex-col w-full max-md:max-w-full">
                  <div className="self-center px-4 py-2 text-xs font-medium leading-none text-purple-500 uppercase bg-purple-500/10 bg-opacity-10 rounded-[75px]">
                    CONTACT US
                  </div>
                  <div className=" mt-2.5 w-full text-4xl font-bold leading-10 text-gray-800 max-md:px-5 max-md:max-w-full">
                    Histudy Course Contact
                    <br />
                    can join with us.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center self-center w-full px-5">
              {contactData.map((card, index) => (
                <ContactCard
                  key={index}
                  title={card.title}
                  items={card.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactSection;
