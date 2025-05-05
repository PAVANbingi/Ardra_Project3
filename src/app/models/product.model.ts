export interface Product {
  id: number;
  brand: string;
  model: string;
  price: number;
  releaseDate: Date;
  bodyType: 'SUV' | 'Sedan' | 'Hatchback' | 'Coupe' | 'Convertible';
  engine: string;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Manual' | 'Automatic';
  color: string;
  imageUrl: string;
}
