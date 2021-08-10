import React, {useEffect, useState} from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';






export const ProjectImages = (props) => {
    const thisProject = props.projectObject;
    const showThumbnails = thisProject.projectImageNum > 8;

    const allImages = (projectObject) => {
        let numOfImg = projectObject.projectImageNum;
        let directory = projectObject.projectPortfolioURL;
        let imageArr = [];
        let ext = ['.jpeg','.jpg','.png','.svg'];
        for(let i=0;i<numOfImg;i++){
                ext.forEach(x =>{
                    try {
                        imageArr.push( {
                            src: require(`../../img/projects${directory}${directory}${i}${x}`)
                            }
                        )
                    } catch (e){}
                })
        }
        return imageArr
    }

    let projectImages = allImages(thisProject);




    return (
        <>
            <Col className={'col-lg-5 bg-ekshell rounded p-2 m-1 dualSexyShadows'}>
                <Carousel images={projectImages} hasThumbnails={showThumbnails} className={'w-100'} style={{ height: 500 }} />
            </Col>
        </>
    )
};