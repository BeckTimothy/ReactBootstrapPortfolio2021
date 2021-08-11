import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';




/*
*   TODO: use video.js instead of reeact-gallery-carousel
*   TODO: add image for 'no videos available'
*   TODO:
*
*
*
*/
export const ProjectVideos = (props) => {

    const thisProject = props.projectObject;
    const showThumbnails = thisProject.projectImageNum > 8;

    const allVideos = (projectObject) => {
        let videoArr = [];

        let youtubeArr = projectObject.projectYoutubeLinks;

        youtubeArr.forEach(x => {
            videoArr.push( {
                    src: x
                }
            )
        })

        let directory = projectObject.projectPortfolioURL;

        let numOfVids = projectObject.projectVideoNum;
        let ext = ['.mp4','.gif','.avi','.mpeg'];

        for(let i=0;i<numOfVids;i++){
                ext.forEach(x =>{
                    try {
                        videoArr.push( {
                            src: require(`../../projectVideos${directory}${directory}${i}${x}`)
                            }
                        )
                    } catch (e){}
                })
        }
        return videoArr
    }

    let projectVideos = allVideos(thisProject);



    return (
        <>
            <Col className={'col-lg-5 p-2 m-1'}>
                <Row className={"h-100 w-100  rounded d-flex flex-column justify-content-center align-items-center skeleton"}>
                    <div class='playButton'></div>
                    <span>Project Videos Unavailable</span>
                </Row>
                {/*<Carousel className={'w-100 demSexyShadows rounded'} images={projectVideos} hasMediaButton={false} hasSizeButton={"bottomRight"} hasDotButtons={'bottom'} hasThumbnails={showThumbnails} style={{ height: 500 }} />*/}
            </Col>
        </>
    )
};