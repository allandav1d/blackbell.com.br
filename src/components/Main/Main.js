import React, { Component } from 'react';

const styles ={
    mainBody: {
        minHeight: "70vh",
    }
};

class Main extends Component{
    render(){
        return(
            <div className="container" name="quemSomos">
                <div className="row">
                    <div className="col-12 d-flex align-content-center justify-content-center flex-wrap py-3" style={styles.mainBody}>
                        <div className="col-12 d-flex align-content-center justify-content-center">
                            <h5 className="text-white text-center">
                            A <b>BLACKBELL STUDIOS</b> é uma empresa start-up de jogos indie multiplataformas localizada em São Paulo, nascida de um sonho coletivo de um grupo de amigos e entusiastas da área de games de lançar nossos próprios jogos autorais. A equipe foi formada no passado durante a Graduação em Games e hoje se estende ao campo profissional. Nossos projetos atuais são embriagados pelo saudoso e sempre eterno gráfico em pixel art, com foco na criatividade, profissionalismo, e a experiência do jogador ao apertar ‘PLAY’.
                            </h5>
                    </div>
                        <div className="col-12 align-content-center justify-content-center">
                            <h3 className="text-white text-center py-5" >
                            Em Indie Game Jams</h3>
                            <div className="col-12 align-content-center justify-content-center d-flex">
                                
                                <a href="https://itch.io/jam/lostcartridgejam/entries" target="_blank">
                                    <img  class="img-fluid px-2" src="../img/JAMS/LOST_JAM.png" alt=""/>
                                </a>
                                <a href="https://itch.io/jam/uspgamejam/entries" target="_blank">
                                    <img  class="img-fluid px-2" src="../img/JAMS/USP_JAM.png" alt=""/>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Main;