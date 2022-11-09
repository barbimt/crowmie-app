import { Box, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { theme } from "./assets/theme";
import DescriptionSection from "./Components/Layout/DescriptionSection";
import GraphicSection from "./Components/Layout/GraphicSection";
import Header from "./Components/Layout/Header";
import MainContent from "./Components/Layout/MainContent";
import StatusAndMapSection from "./Components/Layout/StatusAndMapSection";
import { LanguageProvider } from "./Context/LanguageContext";

import Promotion from "./Components/Layout/Promotion";
import SocialMedia from "./Components/SocialMedia";
import { DataProvider } from "./Context/DataContext";
import WaveFooter from "./Components/WaveFooter";

function App() {
  return (
    <DataProvider>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <Container >
            <main>
              <MainContent />
              <DescriptionSection />
              <StatusAndMapSection />
              <GraphicSection />
            </main>
          </Container>
          <div className="wave-container">
            <Promotion />

            <WaveFooter/>
            <SocialMedia />
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </DataProvider>
  );
}

export default App;
