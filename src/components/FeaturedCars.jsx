// FeaturedCars Component - Display 4 car models in grid layout
import React from 'react';
import { carModels } from '../data/carsData';

const FeaturedCars = () => {
  return (
    <section id="models" className="section section-bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="section-title">Các mô hình của chúng tôi</h2>
          <p className="section-subtitle mx-auto">
            Khám phá bộ sưu tập độc quyền các phương tiện cao cấp của chúng tôi được chế tác hoàn hảo.
          </p>
        </div>

        {/* Cars Grid - Bootstrap responsive grid */}
        <div className="row g-4">
          {carModels.map((car) => (
            <div className="col-12 col-md-6 col-lg-3" key={car.id}>
              {/* Car Card - h-100 ensures equal height across all cards */}
              <div className="card car-card h-100">
                {/* Car Image */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="card-img-top car-card-img"
                />

                {/* Card Content - d-flex flex-column enables flex layout, mt-auto on button pushes it to bottom */}
                <div className="card-body car-card-body d-flex flex-column">
                  {/* Title - fixed height ensures consistent alignment across all cards */}
                  <h3 className="car-card-title" style={{ minHeight: '56px', marginBottom: '0' }}>
                    {car.name}
                  </h3>

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

                  {/* View Details Button - mt-auto pushes button to bottom of card */}
                  <button className="btn btn-primary-custom w-100 mt-auto">
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
