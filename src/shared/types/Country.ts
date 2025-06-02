export interface Country {
  cca3: string;
  name: {
    common: string;
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  population: number;
}
