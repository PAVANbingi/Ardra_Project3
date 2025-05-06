export interface Product {
  id: number;
  brand: string;
  model: string;
  price: number;
  releaseDate: Date;
  bodyType:
    | 'SUV'
    | 'Sedan'
    | 'Hatchback'
    | 'Coupe'
    | 'Convertible'
    | 'Compact SUV'
    | 'Electric SUV'
    | 'Premium MPV'
    | 'Luxury Car'|'Luxury SUV'|'Electric Sedan'|'Luxury Electric Sedan'| 'Luxury Electric SUV'| 'Electric Hatchback'| 'Electric Crossover'
    | 'Sports Car'
    | 'Roadster'
    | 'MPV'
    | 'Crossover'
    | 'Wagon/Estate';
  engine: string;
  fuelType:
    | 'Petrol'
    | 'Diesel'
    | 'Electric'
    | 'Hybrid'
    | 'Petrol/Hybrid'
    | 'Petrol/Diesel'|'Petrol / Diesel'

    | 'Petrol / Hybrid'
    | 'Petrol / CNG'
    | 'Petrol / Electric (Expected)'
    | 'Petrol / Diesel / EV';
  transmission:
    | 'Manual/AMT'
    | 'Manual/CVT'
    | 'Manual/Automatic'
    | 'Manual/CVT/eCVT'
    | 'Manual/DSG'
    | 'eCVT'
    | 'Manual/CVT/DCT'
    | 'Manual'
    | 'Automatic'
    | 'Manual / AMT / CVT'
    | 'Manual / iMT / DCT'
    | 'Manual / iMT / DCT / Automatic'
    | 'CVT'
    | 'Dual-Clutch'
    | 'Tiptronic'
    | 'Semi-Automatic'
    | 'Manual / AMT / DCT'
    | 'AMT'
    | 'e-CVT'
    | 'Manual / CVT / DCT'
    | 'Manual / AMT'
    | 'Manual / Automatic'
    | 'Manual / CVT'
    | 'TBD'
    | 'Automatic (8-speed)'
    | '7-speed DCT'
    | '6-speed S tronic'
    | '8-speed Automatic'
    | '7-speed DSG'
    | '6-speed Manual / Automatic'
    | '5-speed Manual'
    | '6-speed Manual'
    | '5-speed Automatic'
    | '7-speed S-Tronic Automatic'|'7-speed PDK Automatic'
    | '7-speed Dual Clutch Automatic'
    | '8-speed Dual Clutch Automatic'
    |'9-speed AT'

    | '10-speed Automatic';
  color: string;
  imageUrl: string;
  wikiUrl: string;
  officialUrl: string;
  // status: String |null ;
}
