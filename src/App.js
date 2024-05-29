import { createContext, useContext, useState } from "react";
import "./App.css";
import HeroSection from "./pages/HeroSection";
import AboutSection from "./pages/AboutSection";

export const DarkModeContext = createContext();

function App() {
  const [isdark, setIsDark] = useState(true);

  return (
    <DarkModeContext.Provider value={{isdark, setIsDark}}>
      <HeroSection />
      <AboutSection/>
    </DarkModeContext.Provider>
  );
}

export default App;
