import About from "./components/About";
import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Proyects from "./components/Proyects";
import Timeline from "./components/Timeline";
import Theme from "./colorTheme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("lg");
  return (
    <ThemeProvider theme={Theme[theme]}>
      <Navbar />
      <Hero theme={theme} setTheme={setTheme} />
      <About />
      <Timeline />
      <Proyects />
      <Form />
    </ThemeProvider>
  );
}

export default App;
