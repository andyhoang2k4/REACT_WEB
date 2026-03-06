// Cars data for FeaturedCars component
import carGtSport from '../assets/images/car-gt-sport.jpg';
import carExecutive from '../assets/images/car-executive.jpg';
import carSuv from '../assets/images/car-suv.jpg';
import carConvertible from '../assets/images/car-convertible.jpg';

export const carModels = [
  {
    id: 1,
    name: 'GT Sport Coupe',
    image: carGtSport,
    horsepower: '580 HP',
    acceleration: '3.2s',
    basePrice: 125000
  },
  {
    id: 2,
    name: 'Executive Sedan',
    image: carExecutive,
    horsepower: '420 HP',
    acceleration: '4.8s',
    basePrice: 95000
  },
  {
    id: 3,
    name: 'Luxury SUV Premium',
    image: carSuv,
    horsepower: '550 HP',
    acceleration: '4.2s',
    basePrice: 115000
  },
  {
    id: 4,
    name: 'Performance Convertible',
    image: carConvertible,
    horsepower: '520 HP',
    acceleration: '3.8s',
    basePrice: 135000
  }
];
