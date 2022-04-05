import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Slider from "../components/Slider/Slider";
import ContactForm from "../components/Contact/ContactForm";

function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home;