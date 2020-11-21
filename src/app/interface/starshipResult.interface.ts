import { Starship } from './starship.interface';

// StarshipResponse model (that comes from the api)
export interface StarshipResult {
  count: number;
  next: any;
  previous: any;
  results: Starship[];
}
