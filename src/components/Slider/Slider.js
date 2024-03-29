import React,{useState} from 'react';
import './Slider.scss';
import ImgComp from "./ImgComp";
import i1 from "./pics/1.PNG";
import i2 from "./pics/1.PNG";
import i3 from "./pics/1.PNG";
import i4 from "./pics/1.PNG";
import i5 from "./pics/1.PNG";

function Slider(){
    let sliderArr=[
        <ImgComp src={i1}/>,
        <ImgComp src={i2}/>,
        <ImgComp src={i3}/>,
        <ImgComp src={i4}/>,
        <ImgComp src={i5}/>,
    ];
    const [x,setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };
    
    return(
        <div className="slider" name="home">
        {sliderArr.map((item,index)=>{
            return(
                <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                {item}
                </div>
                );
            })} 
            <button id="goLeft"  onClick={goLeft}>
            <ion-icon name="chevron-back-outline"></ion-icon>
            </button>
            <button id="goRight" onClick={goRight}>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
            </div>
            )
        }
        
        export default Slider;