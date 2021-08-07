import React from "react";
import {Row} from "react-bootstrap";

//buttsss designed and drawn by Pablo Stanley at https://www.buttsss.com/

//creates random Buttsss for 404 page
export const Buttsss = () => {
    let numOfImg = 40;
    let randImg = Math.floor(Math.random() * Math.floor(numOfImg));

    return (
        <>
            <Row className={`justify-content-center`} xs={8}>
                <img className={`w-75`} src={require(`../buttsss/img/${randImg}.gif`)} alt="comedic animation of a hand drawn booty"/>
            </Row>
        </>
    );
};