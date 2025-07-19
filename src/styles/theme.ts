
import { Theme } from '@emotion/react';

export const theme: Theme = {
  fonts: {
    body: 'var(--font-montserrat)',
    heading : 'var(--font-inter)',
    mobileHeader:'var(--font-abhaya)',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold:600,
    bold: 700,
  },
};

declare module '@emotion/react' {
  export interface Theme {
    fonts: {
      body: string;
      heading:string,
      mobileHeader:string,
    };
    fontWeights: {
      regular: number;
      medium: number;
      semibold:number;
      bold: number;
    };
  }
}