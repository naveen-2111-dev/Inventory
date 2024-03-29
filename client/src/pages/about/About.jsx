import React from "react";
import { Nav } from "../../components/index";
import { Navigate } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Nav />
      <section className="About1">
        <div className="about-text1">
          <h1>
            About <span>Us</span>
          </h1>
          <p>
            Sri Sairam Techno Incubation Foundation was established on 12th
            September 2020 at Sri Sairam Engineering College. This incubation
            center focuses on several key areas, including Solid Waste
            Management (SWM), Defence, Robotics, Agriculture, Drones,
            Healthcare, and Additive Manufacturing. Here are some highlights:
            Startups Incubated: A total of 85 startups have been incubated,
            covering diverse domains. Women Startups: The incubator has
            supported 14 women-led startups. Defense Startups: It has also
            nurtured 2 defense startups. Startups Graduated: So far, 17 startups
            have successfully graduated from the incubation program. The vision
            of Sri Sairam Techno Incubation Foundation is to be a center of
            excellence that fosters a dynamic and sustainable ecosystem for
            enriching entrepreneurship skills. Their objectives include
            enhancing graduate engineers’ knowledge to align with industry
            requirements, instilling an industry culture, and promoting
            awareness of the latest technologies and product development
            processes. Some of the exciting projects and startups that have
            emerged from Sri Sairam Techno Incubation Foundation include:
            Automation & Monitoring System for Mushroom Cultivation: Providing
            setups and methods to promote automated and technological
            agriculture. Automation of Fire Extinguisher: Focusing on solutions
            for fire accidents in textile shops, warehouses, and industries.
            Pendulum Hand Pump: A design that reduces discomfort and fatigue for
            users operating deep well hand pumps. Avian Incubator: Simulating
            avian incubation methods to hatch eggs at an optimum temperature and
            humidity. Pond Quality Monitoring System: Monitoring Koi fish
            populations using a combination of kiosks and probing buoys.
            Remotely Operated Underwater Vehicle: Supporting aquaculture farms
            by solving outdated cage maintenance methods. Bookiva: A web
            application for college accommodation reservations. These
            initiatives demonstrate Sri Sairam Engineering College’s commitment
            to nurturing creativity, innovation, and entrepreneurship among
            students, faculty, and aspirants. They aim to create a strong
            industrial culture and enable the transformation of ideas into
            tangible products.
          </p>
          <button> Learn More</button>
        </div>
      </section>
    </div>
  );
};

export default About;
