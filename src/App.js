import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import resumeData from './components/resume/resumeData';
//import Portfolio from './components/portfolio/portfolio';
//import Testimonials from  './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header resumeData = {resumeData}/>
      {/* <About />
      {/* <Resume />
      <Testimonials /> */}
      {/* <Contact />
      <Footer />  */}
    </div>
    );
  }
}

export default App;
