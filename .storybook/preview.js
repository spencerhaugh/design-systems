import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";

export const parameters = {
  backgrounds: {
    default: "Default Theme",
    values: [
      { name: "Default Theme", value: "#eeeeee" },
      { name: "Dark Theme", value: "#050449" }
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global themes',
    defaultValue: 'Default Component',
    toolbar: {
      icon: 'box',
      items: ['Default Component', 'Dark Component'],
      showName: false,
    },
  },
};



export const decorators = [
  (Story, context) => {

    const theme = context.globals.theme === 'Default Component' ? defaultTheme : darkTheme;

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }
];