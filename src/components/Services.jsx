import { useState } from "react";
import "./Services.css";
import { ScrollReveal } from "./ScrollReveal";
import{servicesData} from "../data/servicesData"

export const Services = () => {
  const [activeService, setActiveService] = useState(null);
  return (
    <section className="services-section" id="services">
      <div className="services-container">

        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="services-header">
            <span className="section-label">SERVICES</span>
            <h2 className="services-title">What I build.</h2>
          </div>
        </ScrollReveal>

        {/* Accordion / Interactive List */}
        <ScrollReveal delay={0.25}>
          <div className="services-list">
            {servicesData.map((service, index) => {
              const isActive = activeService === index;

              return (
                <div
                  key={service.id}
                  className={`service-item ${
                    isActive ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <div className="service-main flex-between">
                    <div className="service-left">
                      <span className="service-number">
                        {service.id}
                      </span>

                      <h3 className="service-title">
                        {service.title}
                      </h3>
                    </div>

                    <button
                      className="service-arrow-btn"
                      aria-label={`View ${service.title}`}
                    >
                      {isActive ? "↗" : "→"}
                    </button>
                  </div>

                  {isActive && (
                    <p className="service-description">
                      {service.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};