import {ThemeProvider, createGlobalStyle } from "styled-components";
import logo from './logo.svg';
import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button.js";
import './App.css';
import './styles.css';
import {AnimatedLogo, DarkButton} from "./components/Button/Button.styles";

const theme = {
    dark: {
        primary: '#000',
        text: '#fff',
    },
    light: {
        primary: '#fff',
        text: '#000',
    },
    fontFamily: 'Roboto'
}

const GlobalStyles = createGlobalStyle`
    button {
        font-family: ${(props) => props.theme.fontFamily};
    }
`

function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyles />
              <div className="App">
                  {/*<img src={logo} className="App-logo" alt=""/>?*/}
                  <AnimatedLogo src={logo} alt="logo" />
                  <div>
                      <StyledButton type="submit">
                          Styled Button
                      </StyledButton>
                  </div>
                  <br/>
                  <div>
                      <StyledButton danger>
                          Styled Button
                      </StyledButton>
                  </div>
                  <br/>
                  <div>
                      <StyledButton variant="outlined">
                          Styled Button
                      </StyledButton>
                  </div>
                  <br/>
                  <div>
                      <FancyButton>
                          FancyButton
                      </FancyButton>
                  </div>
                  <br/>
                  <div>
                      <SubmitButton>
                          SubmitButton
                      </SubmitButton>
                  </div>
                  <br/>
                  <div>
                      <DarkButton>
                          DarkButton
                      </DarkButton>
                  </div>
              </div>
      </ThemeProvider>
  );
}

export default App;
