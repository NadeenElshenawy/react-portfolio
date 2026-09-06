// src/components/Testimonials/Testimonials.jsx
import { useState } from 'react';
import './Testimonials.css';

export const Testimonials = ({ testimonials = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasTestimonials = testimonials && testimonials.length > 0;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        {/* HEADER SECTION */}
        <div className="testimonials-header">
          <span className="testimonials-subtitle">TESTIMONIALS</span>
          <h2 className="testimonials-title">Feedback & endorsements.</h2>
        </div>

        {hasTestimonials ? (
          /* SLIDER WRAPPER */
          <div className="testimonials-slider-wrapper">
            <div className="testimonials-card">
              <div className="testimonial-content">
                <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
                <div className="testimonial-author">
                  {testimonials[currentIndex].avatar && (
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="author-avatar"
                    />
                  )}
                  <div className="author-details">
                    <h4 className="author-name">{testimonials[currentIndex].author}</h4>
                    <span className="author-role">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTROLS & PAGINATION (ONLY SHOWS FOR MULTIPLE TESTIMONIALS) */}
            {testimonials.length > 1 && (
              <div className="slider-controls">
                <button 
                  onClick={handlePrev} 
                  className="slider-arrow" 
                  aria-label="Previous testimonial"
                >
                  &larr;
                </button>

                <div className="slider-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  onClick={handleNext} 
                  className="slider-arrow" 
                  aria-label="Next testimonial"
                >
                  &rarr;
                </button>
              </div>
            )}
          </div>
        ) : (
          /* DASHED PLACEHOLDER CARD */
          <div className="testimonials-card is-placeholder">
            <div className="quote-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p className="testimonials-text">
              Client testimonials will appear here as collaborations are completed.
              I’d love to hear from you after we work together.
            </p>

            <a href="#contact" className="testimonials-link">
              Get in touch &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
};