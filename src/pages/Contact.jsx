import React from "react";
import ContactSection from "../Components/ContactComponents/ContactSection";
import FormSection from "../Components/ContactComponents/FormSection";
import GoogleMap from "../Components/ContactComponents/GoogleMap";

function Contact() {
  return (
    <div>
      <ContactSection />
      <FormSection />
      <GoogleMap />
    </div>
  );
}

export default Contact;
