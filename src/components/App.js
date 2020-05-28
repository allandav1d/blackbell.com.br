import React from 'react';
import Header from './templates/Header';
import Footer from './templates/Footer';
import Slider from './Slider/Slider';
import Projects from './Projects/Projects';
import Team from './Team/Team';
import Main from './Main/Main';

const styles ={
  backgroung: {
      backgroundColor:"black"
  }
};

export default class App extends React.Component{
  render(){
    return(
      <div style={styles.backgroung}>
      <Header />
      <Slider />
      <Main />
      <Projects />
      <Team />
      <Footer />
      </div>
      
      );
    }
  }