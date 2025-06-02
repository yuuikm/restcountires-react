export interface Country {
  cca3: string;
  altSpellings: string[];
  flags: {
    svg: string;
    png: string;
  };
  flag: string;
  region: string;
  population: number;
  borders?: string[];
  name: {
    common: string;
    official?: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  translations?: Record<
    string,
    {
      official: string;
      common: string;
    }
  >;
}
