import React, { Component } from 'react';
import data from "./TeamMember";

const styles ={
    roleBorder: {
        borderLeft: "4px solid #f1c40f",
        paddingLeft:"10px"
    },
    imgPictures:{
        backgroundColor:"#000000",
        border: "5px solid #000000",
        boxShadow: "0px 0px 0px 4px #f1c40f",
        borderRadius:"50%"
    },
    hr:{
        marginTop: ".5rem",
        marginBottom: ".5rem",
        border: "0",
        borderTop: "1px solid #484646"
    }
};

class Team extends Component{
    render(){
        return(
            <div className="container" name="Teams">
            <h1 className="text-white py-3">Teammates</h1>
            <div className="row justify-content-center text-white pb-5">
            {data.Member.map((member, i) => {
                return(
                    <div key={i} className="col-6 py-3">
                    <div className="row align-items-end">
                    <div className="col-3">
                    <img style={styles.imgPictures} src={member.picture} alt="" width="100vw" height="100vw"/>
                    </div>
                    <div className="col-9">
                    <h5>{member.name}</h5>
                    <hr style={styles.hr}/>
                    <h6 style={styles.roleBorder} >{member.role}</h6>
                    </div>
                    </div>
                    </div>
                    );
                })
            }
            </div> 
            </div>
            );
        }
    }
    
    export default Team;