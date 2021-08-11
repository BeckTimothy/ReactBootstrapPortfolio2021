import React from "react";
import Col from "react-bootstrap/Col";
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
            <Col className={'col-lg-5 p-1 m-1 '}>
                <Carousel className={'w-100 demSexyShadows rounded'} images={projectImages} hasMediaButton={false} hasSizeButton={"bottomRight"} hasDotButtons={'bottom'} hasThumbnails={showThumbnails} style={{ height: 500 }} />
            </Col>
        </>
    )
};