import React, { Component } from 'react';

const styles ={
    mainBody: {
        minHeight: "50vh",
    }
};

class Main extends Component{
    render(){
        return(
            <div className="container" name="quemSomos">
                <h1 className="text-white py-3">Blackbell Studios</h1>
                <div className="row">
                    <div className="col-12 d-flex align-content-center justify-content-center flex-wrap" style={styles.mainBody}>
                        <p className="text-white text-center">...................</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;