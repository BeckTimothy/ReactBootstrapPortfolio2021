import React from "react";
import {Col, Row} from "react-bootstrap";
import image0 from "../buttsss/img/image0.gif";
import image1 from "../buttsss/img/1.gif";
import image2 from "../buttsss/img/2.gif";
import image3 from "../buttsss/img/3.gif";
import image4 from "../buttsss/img/4.gif";
import image5 from "../buttsss/img/5.gif";
import image6 from "../buttsss/img/6.gif";
import image7 from "../buttsss/img/7.gif";
import image8 from "../buttsss/img/8.gif";
import image9 from "../buttsss/img/9.gif";
import image10 from "../buttsss/img/10.gif";
import image11 from "../buttsss/img/11.gif";
import image12 from "../buttsss/img/12.gif";
import image13 from "../buttsss/img/13.gif";
import image14 from "../buttsss/img/14.gif";
import image15 from "../buttsss/img/15.gif";
import image16 from "../buttsss/img/16.gif";
import image17 from "../buttsss/img/17.gif";
import image18 from "../buttsss/img/18.gif";
import image19 from "../buttsss/img/19.gif";
import image20 from "../buttsss/img/20.gif"; //image size is fucking YUGE
import image21 from "../buttsss/img/21.gif";
import image22 from "../buttsss/img/22.gif";
import image23 from "../buttsss/img/23.gif";
import image24 from "../buttsss/img/24.gif";
import image25 from "../buttsss/img/25.gif";
import image26 from "../buttsss/img/26.gif";
import image27 from "../buttsss/img/27.gif";
import image28 from "../buttsss/img/28.gif";
import image29 from "../buttsss/img/29.gif";
import image30 from "../buttsss/img/30.gif";
import image31 from "../buttsss/img/31.gif";
import image32 from "../buttsss/img/32.gif";
import image33 from "../buttsss/img/33.gif";
import image34 from "../buttsss/img/34.gif";
import image35 from "../buttsss/img/35.gif";
import image36 from "../buttsss/img/36.gif";
import image37 from "../buttsss/img/37.gif";
import image38 from "../buttsss/img/38.gif";
import image39 from "../buttsss/img/39.gif";
import image40 from "../buttsss/img/40.gif";


//buttsss designed and drawn by Pablo Stanley at https://www.buttsss.com/

//creates random Buttsss for 404 page
export const Buttsss = () => {

    let displayedImg = <img src={image0} alt="loading..."/>;
    let numOfImg = 41;
    let randImg = Math.floor(Math.random() * Math.floor(numOfImg));
    switch(randImg) {
        case 0: displayedImg = <img className={`w-75`} src={image0} alt="loading..."/>; break;
        case 1: displayedImg = <img className={`w-75`} src={image1} alt="loading..."/>; break;
        case 2: displayedImg = <img className={`w-75`} src={image2} alt="loading..."/>; break;
        case 3: displayedImg = <img className={`w-75`} src={image3} alt="loading..."/>; break;
        case 4: displayedImg = <img className={`w-75`} src={image4} alt="loading..."/>; break;
        case 5: displayedImg = <img className={`w-75`} src={image5} alt="loading..."/>; break;
        case 6: displayedImg = <img className={`w-75`} src={image6} alt="loading..."/>; break;
        case 7: displayedImg = <img className={`w-75`} src={image7} alt="loading..."/>; break;
        case 8: displayedImg = <img className={`w-75`} src={image8} alt="loading..."/>; break;
        case 9: displayedImg = <img className={`w-75`} src={image9} alt="loading..."/>; break;
        case 10: displayedImg = <img className={`w-75`} src={image10} alt="loading..."/>; break;
        case 11: displayedImg = <img className={`w-75`} src={image11} alt="loading..."/>; break;
        case 12: displayedImg = <img className={`w-75`} src={image12} alt="loading..."/>; break;
        case 13: displayedImg = <img className={`w-75`} src={image13} alt="loading..."/>; break;
        case 14: displayedImg = <img className={`w-75`} src={image14} alt="loading..."/>; break;
        case 15: displayedImg = <img className={`w-75`} src={image15} alt="loading..."/>; break;
        case 16: displayedImg = <img className={`w-75`} src={image16} alt="loading..."/>; break;
        case 17: displayedImg = <img className={`w-75`} src={image17} alt="loading..."/>; break;
        case 18: displayedImg = <img className={`w-75`} src={image18} alt="loading..."/>; break;
        case 19: displayedImg = <img className={`w-75`} src={image19} alt="loading..."/>; break;
        case 20: displayedImg = <img className={`w-50`} src={image20} alt="loading..."/>; break;
        case 21: displayedImg = <img className={`w-75`} src={image21} alt="loading..."/>; break;
        case 22: displayedImg = <img className={`w-75`} src={image22} alt="loading..."/>; break;
        case 23: displayedImg = <img className={`w-75`} src={image23} alt="loading..."/>; break;
        case 24: displayedImg = <img className={`w-75`} src={image24} alt="loading..."/>; break;
        case 25: displayedImg = <img className={`w-75`} src={image25} alt="loading..."/>; break;
        case 26: displayedImg = <img className={`w-75`} src={image26} alt="loading..."/>; break;
        case 27: displayedImg = <img className={`w-75`} src={image27} alt="loading..."/>; break;
        case 28: displayedImg = <img className={`w-75`} src={image28} alt="loading..."/>; break;
        case 29: displayedImg = <img className={`w-75`} src={image29} alt="loading..."/>; break;
        case 30: displayedImg = <img className={`w-75`} src={image30} alt="loading..."/>; break;
        case 31: displayedImg = <img className={`w-75`} src={image31} alt="loading..."/>; break;
        case 32: displayedImg = <img className={`w-75`} src={image32} alt="loading..."/>; break;
        case 33: displayedImg = <img className={`w-75`} src={image33} alt="loading..."/>; break;
        case 34: displayedImg = <img className={`w-75`} src={image34} alt="loading..."/>; break;
        case 35: displayedImg = <img className={`w-75`} src={image35} alt="loading..."/>; break;
        case 36: displayedImg = <img className={`w-75`} src={image36} alt="loading..."/>; break;
        case 37: displayedImg = <img className={`w-75`} src={image37} alt="loading..."/>; break;
        case 38: displayedImg = <img className={`w-75`} src={image38} alt="loading..."/>; break;
        case 39: displayedImg = <img className={`w-75`} src={image39} alt="loading..."/>; break;
        case 40: displayedImg = <img className={`w-75`} src={image40} alt="loading..."/>; break;
        default: displayedImg = <img className={`w-75`} src={image0} alt="loading..."/>;
    }

    //TODO: force a standardized size for images

    return (
        <>
            <Row className={`justify-content-center`} xs={8}>
            {displayedImg}
            </Row>
        </>
    );
};