import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export const PortfolioHeader = (item) => {
    item = item.projectObject

    const [hasGithub, setHasGithub] = useState(false);
    const handleHasGithub = (val) => {
        setHasGithub(val);
    }
    
    fetch(item.projectGithubURL.replace('https://github.com', 'https://api.github.com/repos'), {
        Accept: 'application/vnd.github.v3+json',
        method: 'GET',
    })
        .then(response => {
            if (response.ok) {
                return response.text()
            }
            throw response;
        })
        .then(data => {
            try {
                handleHasGithub(!JSON.parse(data).private)
            } catch (e) {
            }
        })
        .catch(error => console.log(error))

    const getProjectButtons = () => {
        let projectURL = item.projectPortfolioURL;
        let demoURL = item.projectDemoSiteURL;
        let liveURL = item.projectLiveSiteURL;
        let isProject, isLive, isDemo = false;
        if (typeof projectURL === 'string' && projectURL !== "") {
            isProject = true;
        }
        if (typeof demoURL === 'string' && demoURL !== "") {
            isDemo = true;
        }
        if (typeof liveURL === 'string' && liveURL !== "") {
            isLive = true;
        }


        return (
            <>
                {isProject ?
                    <Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectPortfolioURL}>Project
                        Page</Button> : <></>}
                {isLive ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectLiveSiteURL}>Live
                    Website</Button> : <></>}
                {!isLive && isDemo ?
                    <Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectDemoSiteURL}>Demo
                        Website</Button> : <></>}
                {hasGithub ? <Button className={'demSexyShadows mx-2'} variant="secondary" href={item.projectGithubURL}>Github
                    Repo</Button> : <></>}
            </>)
    }

    return (

        <div
            className={'col-10 d-flex justify-content-around bg-ekshell rounded my-2 p-3 dualSexyShadows'}>{/*TODO: change color*/}
            <Col className={'d-flex flex-column justify-content-between'}>
                <h1>{item.projectName}</h1>
                <span>{item.projectShortDescription}</span>
                <Row className={'px-3 mt-2'}>{getProjectButtons(item)}</Row>
            </Col>
            <Col className={'d-flex justify-content-around'}>
                <Img className={'rounded demSexyShadows w-50'}
                     src={require(`../../img/portfolioThumbnails/${item.projectImageName}.png`)}/>
            </Col>
        </div>

    )
};