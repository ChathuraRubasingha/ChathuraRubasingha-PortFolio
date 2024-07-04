import React, { createContext, useState } from "react";
import "./App.css";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import MyJourny from "./pages/MyJourny";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import PdfViewer from "./components/PdfViewer";
import { Element } from "react-scroll";

export const isDarkContext = createContext();

function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <isDarkContext.Provider value={{ isDark, setIsDark }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/resume" element={<PdfViewer />} />
          <Route
            path="/"
            element={
              <>
                <Element name="home">
                  <Hero />
                </Element>
                <Element name="about">
                  <About />
                </Element>
                <Element name="skills">
                  <Skills />
                </Element>
                <Element name="journy">
                  <MyJourny />
                </Element>
                <Element name="portfolio">
                  <Projects />
                </Element>
                <Element name="contact">
                  <ContactMe />
                </Element>
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </isDarkContext.Provider>
  );
}

export default App;
