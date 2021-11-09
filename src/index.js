import React, { useState } from "react";
import ReactDOM from "react-dom";
import { PrimaryButton, SecondaryButton, TertiaryButton, SignUpModal } from "./components";
import { GlobalStyle, darkTheme, defaultTheme } from './utils';
import { ThemeProvider } from "styled-components";

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false);

    const buttonStyles = { margin: "0 16px 24px", padding: "8px", background: "none" }

    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button
                style={buttonStyles}
                onClick={() => setUseDarkTheme(true)}>
                Dark Theme
            </button>
            <button
                style={buttonStyles}
                onClick={() => setUseDarkTheme(false)}>
                Default Theme
            </button>

            <div
                style={{
                    background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: "space-around"
                }}>
                {/* Buttons Examples */}
                {/* <PrimaryButton>Primary Button!</PrimaryButton>
                <SecondaryButton>Secondary Button!</SecondaryButton>
                <TertiaryButton>Tertiary Button!</TertiaryButton> */}

                {/* Modal Example */}
                <SignUpModal />
            </div>
            <GlobalStyle />
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));