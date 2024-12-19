import React from "react";
import dynamics from '../image/dynamic.jpeg'
import statics from '../image/static.png'

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Your one-stop destination for comprehensive digital solutions. As a skilled web developer,
            I specialize in crafting stunning, functional, and performance-driven websites tailored to your unique needs.
          </p>
        </div>
        <div className="styles row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-lg-4 col-md-6 serviceCards pb-5">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>

        <details>
          <summary><p>see more details</p></summary>
          <div className="pricing-container">
            <div className="pricing-header">
              <div className="plan-selector">
                <span className="active">Business Website Plan</span>
              </div>
            </div>
            <div className="pricing-content">
              <div className="plan-image">
                <img src={statics} alt={'static'} />
                <div className="price">
                  <p>&#8377; 3999</p>
                  <p>+18% GST</p>
                </div>
                <h2>4 years STARTUP PLAN</h2>
              </div>
              <div className="plan-details">
                <ul>
                  <li>
                    Free Domain 1 Year</li>
                  <li>Free Hosting 1 Year</li>
                  <li>Upto 5 pages</li>
                  <li>Social Media Integration</li>
                  <li>Google Maps</li>
                  <li>Contact Form</li>
                  <li> Mobile Responsive</li>
                  <li>Yearly Renewal + Domain Charge</li>
                </ul>
                <p to="/contact" className="get-quote-btn">GET QUOTE </p>
              </div>
            </div>
          </div>
          <div className="pricing-container">
            <div className="pricing-header">
              <div className="plan-selector">
                <span className="active">E-Commerce Website Plan</span>
              </div>
            </div>
            <div className="pricing-content">
              <div className="plan-image">
                <img src={dynamics} alt={'dynamic'} />
                <div className="price">
                  <p>&#8377; 6999</p>
                  <p>+12% GST</p>
                </div>
                <h2>2 years STANDARD PLAN</h2>
              </div>
              <div className="plan-details">
                <ul>
                  <li>Free Domain 1 Year</li>
                  <li>Free Hosting 1 Year</li>
                  <li>Upto 10 pages</li>
                  <li>Whatsapp Intagration</li>
                  <li>Social Media Integration</li>
                  <li>Premium Design</li>
                  <li>Google Forms intergration</li>
                  <li>Business Mail-1</li>
                  <li>Google Maps</li>
                  <li>Contact Form</li>
                  <li>Mobile Responsive</li>
                  <li>Yearly Renewal + Domain Charge</li>
                </ul>
                <a to="/contact" href="#contact" className="get-quote-btn">GET QUOTE </a>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};
