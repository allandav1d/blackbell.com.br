import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component{
  render(){
    return(
<footer>
      <div className="social">
        <ul className="social-list">
          <li className="social-facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </li>
          <li className="social-twitter">
          <ion-icon name="logo-twitter"></ion-icon>
          </li>
          <li className="social-youtube">
          <ion-icon name="logo-youtube"></ion-icon>
          </li>
          <li className="social-linkedin">
          <ion-icon name="logo-linkedin"></ion-icon>
          </li>
          <li className="social-instagram">
          <ion-icon name="logo-instagram"></ion-icon>
          </li>
          <li className="social-pinterest">
          <ion-icon name="logo-pinterest"></ion-icon>
          </li>
        </ul>
      </div>
      <div className="footer-body container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase text-white">Footer Content</h5>
            <p className="text-white">Here you can use rows and columns to organize your footer content.</p>
          </div>
      <hr className="clearfix w-100 d-md-none pb-3"/>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase text-white">Links</h5>
        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase text-white">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>


  <div className="footer-copyright text-white py-3">
    <p className="copyright float-left">© 2020 Copyright: Blackbell Studios. Todos os direitos reservados.</p>
    

    <a className="footer-exit"href="#top"> Emergir 
    <ion-icon name="chevron-up-circle-outline"></ion-icon>
    </a>

      </div>
      </footer>
    );
  }
}