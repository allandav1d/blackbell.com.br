import React from 'react';
import './Footer.scss';

const styles ={
  Links: {
    textDecoration: "none",
    paddingTop: '0px !important',
    paddingBotton: '0px !important',
      "&:hover":{
        border: '.3vw solid whitesmoke'
      }
  }
};

export default class Footer extends React.Component{
  render(){
    return(
<footer>
      <div className="social">
        <ul className="social-list">
          <li className="social-facebook">
            <a href="https://www.facebook.com/studiosBlackbell"><ion-icon name="logo-facebook"/></a>
          </li>
          <li className="social-twitter">
            <a href="https://twitter.com/StudioBlackbell"><ion-icon name="logo-twitter"/></a>
          </li>
          <li className="social-youtube">
            <a href="https://www.youtube.com/channel/UCHkXqMCJktaivhPNHQTIesQ/"><ion-icon name="logo-youtube"/></a>
          </li>
          <li className="social-linkedin">
            <a href="https://www.linkedin.com/company/blackbellstudios/"><ion-icon name="logo-linkedin"/></a>
          </li>
          <li className="social-instagram">
            <a href="https://www.instagram.com/blackbellstudios/"><ion-icon name="logo-instagram"/></a>
          </li>
          <li className="social-pinterest">
            <a href="https://br.pinterest.com/BlackbellStudios/"><ion-icon name="logo-pinterest"/></a>
          </li>
        </ul>
      </div>
      <div className="footer-body container-fluid text-center text-md-left">
        <div className="row">
      <div className="col-md-12 py-3">
        <ul className="list-unstyled">
          <li>
            <a style={styles.Links} href="#!">Imprensa</a>
          </li>
          <li>
            <a style={styles.Links} href="#!">Política de privacidade</a>
          </li>
          <li>
            <a style={styles.Links} href="#!">Termos de serviço</a>
          </li>
          <li>
            <a style={styles.Links} href="#!">Suporte ao jogador</a>
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