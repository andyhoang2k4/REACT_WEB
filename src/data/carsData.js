// Cars data for FeaturedCars component
import carGtSport from '../assets/images/car-gt-sport.jpg';
import carExecutive from '../assets/images/car-executive.jpg';
import carSuv from '../assets/images/car-suv.jpg';
import carConvertible from '../assets/images/car-convertible.jpg';

export const carModels = [
  {
    id: 1,
    name: 'GT Coupe Thể Thao',
    image: carGtSport,
    horsepower: '580 HP',
    acceleration: '3.2s',
    basePrice: 9750000000
  },
  {
    id: 2,
    name: 'Sedan hạng sang',
    image: carExecutive,
    horsepower: '420 HP',
    acceleration: '4.8s',
    basePrice: 3500000000
  },
  {
    id: 3,
    name: 'SUV cao cấp sang trọng',
    image: carSuv,
    horsepower: '550 HP',
    acceleration: '4.2s',
    basePrice: 5150000000
  },
  {
    id: 4,
    name: 'Hiệu suất Convertible',
    image: carConvertible,
    horsepower: '520 HP',
    acceleration: '3.8s',
    basePrice: 8350000000
  }
];
