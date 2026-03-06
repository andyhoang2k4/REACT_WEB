// FeaturedCars Component - Display 4 car models in grid layout
import React from 'react';
import { carModels } from '../data/carsData';

const FeaturedCars = () => {
  return (
    <section id="models" className="section section-bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="section-title">Our Models</h2>
          <p className="section-subtitle mx-auto">
            Explore our exclusive collection of premium vehicles crafted for perfection.
          </p>
        </div>

        {/* Cars Grid - Bootstrap responsive grid */}
        <div className="row g-4">
          {carModels.map((car) => (
            <div className="col-12 col-md-6 col-lg-3" key={car.id}>
              {/* Car Card */}
              <div className="card car-card">
                {/* Car Image */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="card-img-top car-card-img"
                />

                {/* Card Content */}
                <div className="card-body car-card-body">
                  <h3 className="car-card-title">{car.name}</h3>

                  {/* Specifications */}
                  <div className="car-card-specs">
                    <span className="spec-item">
                      <i className="bi bi-speedometer2"></i>
                      {car.horsepower}
                    </span>
                    <span className="spec-item">
                      <i className="bi bi-lightning"></i>
                      {car.acceleration}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="car-card-price">
                    <span className="currency">From</span> ${car.basePrice.toLocaleString()}
                  </div>

                  {/* View Details Button */}
                  <button className="btn btn-primary-custom w-100">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
