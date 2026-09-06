import { useState } from 'react';
import './Services.css';

export const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: "01",
      title: "React Website Development",
      description: "Building fast, modern, and scalable web applications using React and modular component architectures tailored to your business goals."
    },
    {
      id: "02",
      title: "Figma to React",
      description: "Pixel-perfect translation of your Figma UI designs into clean, maintainable, production-ready React code."
    },
    {
      id: "03",
      title: "Responsive Development",
      description: "Ensuring every interface works beautifully across all devices — from large desktop screens to the smallest mobile viewports."
    },
    {
      id: "04",
      title: "Front-End Fixes & Improvements",
      description: "Refactoring existing web components, resolving UI layout bugs, and enhancing responsiveness and user performance."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="services-header">
          <span className="section-label">SERVICES</span>
          <h2 className="services-title">What I build.</h2>
        </div>

        {/* Accordion / Interactive List */}
        <div className="services-list">
          {services.map((service, index) => {
            const isActive = activeService === index;
            return (
              <div
                key={service.id}
                className={`service-item ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={()=>setActiveService(null)}
              >
                <div className="service-main flex-between">
                  <div className="service-left">
                    <span className="service-number">{service.id}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>

                  <button 
                    className="service-arrow-btn"
                    aria-label={`View ${service.title}`}
                  >
                    {isActive ? "↗" : "→"}
                  </button>
                </div>

                {/* Sub-description expands smoothly when active */}
                {isActive && (
                  <p className="service-description">
                    {service.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};