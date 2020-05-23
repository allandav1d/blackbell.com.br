import React from 'react';
import Header from './templates/Header';
import Footer from './templates/Footer';
import Slider from './Slider/Slider';
import Projects from './Projects/Projects';

export default class App extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <Slider />
      <h1>Hello World!</h1>
      <Projects />
      <Footer />
      </div>
      
      );
    }
  }