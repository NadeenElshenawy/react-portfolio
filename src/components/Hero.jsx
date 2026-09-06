import './Hero.css';
import { Button } from "./Button";
import { useState, useEffect } from 'react';
import cvPdf from "../assets/nadeensamycv.pdf";
export const Hero = ({ title, headline, description, imgSrc, imgAlt }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section">
      {/* Dark Side - Left */}
      <div className="hero-section-left">
        <div className="hero-badge">
          <span className="dot"></span> {title}
        </div>
        <h1 className="hero-headline">{headline}</h1>
        <p className="hero-description">{description}</p>
        <div className="hero-actions">
         <a 
  href={cvPdf} 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn-link"
>
  <Button variant="primary">
    View My CV <span className="arrow">→</span>
  </Button>
</a>
          {/* <Button variant="outline">Let's Work Together</Button> */}
        </div>
      </div>

      {/* Light Side - Right with Circular Photo */}
      <div className="hero-section-right">
        <div className={`hero-image-wrapper ${isVisible ? 'animate-in' : ''}`}>
          <div className="hero-image-container">
            <div className="hero-image-border">
              <img src={imgSrc} alt={imgAlt} className="hero-section-right-img" />
              <div className="hero-image-ring"></div>
            </div>
          </div>
        </div>
        <span className="scroll-hint">SCROLL</span>
      </div>
    </div>
  );
};