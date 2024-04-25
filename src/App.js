import React from "react";
import "./App.css";
import { Content } from "./component/index";
import {
  Header,
  Footer,
  Landing,
  AboutMe,
  Statistics,
  Services,
  Skills,
  Portfolio,
  ContactMe,
} from "./component/sections/index";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Content>
        <Landing />
        <AboutMe />
        <Statistics />
        <Services />
        <Skills />
        <Portfolio />
        <ContactMe />
      </Content>
      <Footer />
    </React.Fragment>
  );
};

export default App;
