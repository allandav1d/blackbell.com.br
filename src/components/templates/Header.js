import React, { useState } from 'react';
import './Header.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function  Header (){
  let [linkActive, SetlinkActive] = useState(['active','','','']);
  
  function setActiveNav(param) {
    for (let index = 0; index < linkActive.length; index++) {
      if(index === param){
        linkActive[index] = 'Active'
      }else{
        linkActive[index] = ''
      }
      SetlinkActive(linkActive);
      console.log(linkActive);
    }
  }
  
  function scrollTo(nameElement, itemId) {
    setActiveNav(itemId);
    scroller.scrollTo(nameElement, {
      duration: 800,
      delay: 0,
      offset: -80,
      smooth: 'easeInOutQuart'
    })
  }
  
  
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#home">
        <img className="navbar-brand-img" src="img/Blackbell-logo.svg" alt=""/></a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li  className={`nav-item ${linkActive[0]}`}>
              <a className="nav-link" onClick={() => scrollTo('home',0)}>Home <span className="sr-only">(current)</span></a>
            </li >
            <li  className={`nav-item ${linkActive[1]}`}>
              <a className="nav-link" onClick={() => scrollTo('quemSomos',1)}>Quem somos</a>
            </li >
            <li className={`nav-item ${linkActive[2]}`}>
              <a className="nav-link" onClick={() => scrollTo('Projects',2)}>Projetos</a>
            </li>
            <li className={`nav-item ${linkActive[3]}`}>
              <a className="nav-link" onClick={() => scrollTo('Teams',3)}>Team</a>
            </li>
          </ul>
      </div>
    </nav>
  );
}
  
export default Header;