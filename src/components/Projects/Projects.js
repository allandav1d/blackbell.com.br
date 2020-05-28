import React, { Component } from 'react';
import './Projects.scss';
import data from "./Projetos";
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);
//Numero de projetos no JSON;
const numProjects = Object.keys(data.Projetos).length;
//retorna o numero de slides a ser criado de acordo com o numero projetos
const numSliders = (numProjects/2).toFixed(); 

//futuro
/*
function sliderRendered(params) {
  const {index, key} = params;
  let currentSlider = mod(index,numSliders);
  let projectDown = (currentSlider+1) * 2;
  let projectUp = ((currentSlider+1) * 2) - 1;
  let projectInfoUp = Object(data.Projetos[projectUp-1]);
  let projectInfoDown = Object(data.Projetos[projectDown-1]);
  
  if(parseInt(currentSlider)+1 === parseInt(numSliders) && projectDown.projectName == undefined){
    projectInfoDown = Object(data.Projetos[projectUp-4]);
  }
  
  return(
    <div key={key} className="">
    
    <div className="boxUp">
    <p className="text">Official Page: {projectInfoUp.projectName}</p>   
    <img className="img-boxUp" src={projectInfoUp.imgCover} alt=""/>
    </div>
    <div className="boxDown">
    <p className="text">Official Page: {projectInfoDown.projectName}</p>   
    <img className="img-boxDown" src={projectInfoDown.imgCover} alt=""/>
    </div>
    </div>
    );
  };
  */
  
  function slideRenderer(params) {
    const { index, key } = params;
    
    switch (mod(index, 2)) {
      case 0:
      return (
        <div key={key} className="col-6 py-3">
        <div className="boxUp">
        <p className="text">Official Page: {data.Projetos[0].projectName}</p>   
        <img className="img-boxUp" src={data.Projetos[0].imgCover} alt=""/>
        </div>
        </div>
        );
        
        case 1:
        return (
          <div key={key} className="col-6 py-3">
          <div className="boxUp">
          <p className="text">Official Page: {data.Projetos[1].projectName}</p>   
          <img className="img-boxUp" src={data.Projetos[1].imgCover} alt=""/>
          </div>
          </div>
          );

          default:
          return null;
        }
      }
      
      
      function Projects(){
        return(
          <VirtualizeSwipeableViews name="Projects" className="project-container" slideClassName="project-slide" slideRenderer={slideRenderer} enableMouseEvents/>
          );
        }
        
        export default Projects;