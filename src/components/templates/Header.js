import React, { useState } from 'react';
import './Header.css';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const linkActive = ['active','','',''];

class Header extends React.Component{
  
  setActiveNav(param) {
    for (let index = 0; index < linkActive.length; index++) {
      if(index === param){
        linkActive[index] = 'active'
      }else{
        linkActive[index] = ''
      }
    }
      console.log(linkActive);
  }
  
  scrollTo(nameElement, itemId) {
    this.setActiveNav(itemId);
    scroller.scrollTo(nameElement, {
      duration: 800,
      delay: 0,
      offset: -80,
      smooth: 'easeInOutQuart'
    })
  }
  
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#home">
          <img className="navbar-brand-img" src="img/Blackbell-logo.svg" alt=""/></a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li  className={`nav-item ${linkActive[0]}`} activeClassName="Active">
                <a className="nav-link" onClick={() => this.scrollTo('home',0)}>Home <span className="sr-only">(current)</span></a>
              </li >
              <li  className={`nav-item ${linkActive[1]}`}  activeClassName="Active">
                <a className="nav-link" onClick={() => this.scrollTo('quemSomos',1)}>Quem somos</a>
              </li >
              <li className={`nav-item ${linkActive[2]}`} activeClassName="Active">
                <a className="nav-link" onClick={() => this.scrollTo('Projects',2)}>Projetos</a>
              </li>
              <li className={`nav-item ${linkActive[3]}`} activeClassName="Active">
                <a className="nav-link" onClick={() => this.scrollTo('Teams',3)}>Team</a>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
  
}
  
export default Header;