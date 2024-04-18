import React from "react";
import "./services.css";
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/service-3.svg";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Data Science",
    description:
      "I provide Data Science as a Service (DSaaS) to streamline your data analysis needs. With my expertise, I offer cost-effective outsourcing, access to specialized insights, scalable services, and rapid delivery of actionable insights.  priority is ensuring data security, maintaining clear communication, and aligning with your business objectives.",
  },
  {
    id: 2,
    image: Image2,
    title: "Software Engineering",
    description:
      "Offering top-tier software engineering services, I specialize in crafting tailored solutions for your needs. Whether you're starting from scratch or optimizing existing systems, count on me to deliver excellence from concept to deployment. Let's bring your software ideas to life.",
  },
  {
    id: 3,
    image: Image3,
    title: "UI/UX",
    description:
      "Offering UI/UX services, I specialize in creating intuitive and visually appealing user interfaces and experiences. Whether you need a new design from scratch or improvements to an existing one, I ensure a seamless and engaging user journey. Let's collaborate to elevate your digital presence and user satisfaction.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
