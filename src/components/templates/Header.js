import React from 'react';
import './Header.css';

export default class Header extends React.Component{
  render(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#home">
      <img className="navbar-brand-img" src="img/Blackbell-logo.svg" alt=""/></a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#quemsomos">Quem somos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projetos">Projetos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#team">Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contato">Contato</a>
      </li>
    </ul>
  </div>
</nav>
      );
    }
  }