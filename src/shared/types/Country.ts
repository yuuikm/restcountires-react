export interface Country {
  cca3: string;
  name: {
    common: string;
  };
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  population: number;
}
