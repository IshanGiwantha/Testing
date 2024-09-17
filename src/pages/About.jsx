import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">We love our customers!</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
        Local artisan products reflect the unique culture, heritage, and craftsmanship of the community they come from. 
        These products, crafted by skilled artisans, often include handmade items such as pottery, textiles, jewelry, woodwork, and gourmet foods. 
        Each piece is made with attention to detail and a passion for quality, ensuring that every item is not only functional but also a work of art.
        By purchasing local artisan products, customers support small businesses and help preserve traditional techniques passed down through generations. 
        These products are typically made from locally sourced materials, adding to their authenticity and sustainability. 
        Shoppers can enjoy the satisfaction of owning a one-of-a-kind item while contributing to the local economy and fostering a sense of community.
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
