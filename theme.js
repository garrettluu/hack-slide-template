import { prism } from '@mdx-deck/themes';
const orange = "#F9A857";
const black = "#333333";
const white = "#FFFFFF";
const darkOrange = "#271400";

export default {
  googleFont: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
  fonts: {
    body: '"DM Sans", sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
  colors: {
    text: black,
    background: white,
    primary: orange,
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  components: {
    ...prism.components
  },
  styles: {
    b: {
      color: 'primary',
    },
    h1: {
      fontSize: 84,
      fontWeight: 'heading',
    },
    h2: {
      fontSize: 48,
      fontWeight: 'body',
    },
  }
};
