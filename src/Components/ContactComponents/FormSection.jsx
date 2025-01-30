import React from "react";
import { Form } from "./Form";

function FormSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pb-24 px-5">
      <div className="flex flex-wrap justify-center w-full max-w-[1440px]">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-[990px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/f77b327c39744f388920974a712bb471/e596d4d29c9eb2006f17f684e470eb8bb141cc40e079eeeb3f2ed01d0da99eda?apiKey=f77b327c39744f388920974a712bb471&"
            alt="Contact form illustration"
            className="object-contain w-full max-w-[478px] mb-6"
          />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default FormSection;
