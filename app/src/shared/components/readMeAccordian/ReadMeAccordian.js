import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Arrow from "../../img/arrowSVG.svg";
import ReactMarkdown from 'react-markdown';



export const ReadMeAccordian = (props) => {

	const [isHidden, setIsHidden] = useState(true);
	const handleIsHidden = () => {
		setIsHidden(!isHidden);
	}

	const [isLoading, setIsLoading] = useState(true);
	const handleIsLoading = () => {
		setIsLoading(false);
	}

	let projectName = props.projectObject.projectName;
	let githubURL = props.projectObject.projectGithubURL;
	let readmeURL = `${githubURL.replace('https://github.com/', 'https://raw.githubusercontent.com/')}/master/README.md`
	const [readMe, setReadMe] = useState(null);
	const handleSetReadMe = (newReadMe) => {
		setReadMe(newReadMe);
	}

	fetch(readmeURL)
		.then(response => {
			if(response.ok) {
				return response.text()
			}
			throw response;
		})
		.then(data => {
			handleSetReadMe(data);
			handleIsLoading();
		})
		.catch(error => console.log(error))





	return (isLoading ?
			<>
				<Row
					className={'col-10 bg-ekshell-25 d-flex justify-content-start align-items-center rounded my-2 dualSexyShadows'}
				>
					<div className={'d-inline-block'}>
						<span></span>
					</div>
					<h4 className={'my-2 ml-2 hoverPointer'}></h4>
				</Row>
			</>
			:
			(isHidden ?
					<>
						<Row
							className={'col-10 bg-ekshell d-flex justify-content-start align-items-center rounded my-2 dualSexyShadows hoverPointer'}
							onClick={handleIsHidden}>
							<div className={'d-inline-block'}>
								<img
									src={Arrow}
									className={'d-block arrow ml-2 hoverPointer'}
									id={'contactsArrow'}
									alt={'arrow pointing at text'}
								/>

							</div>
							<h4 className={' my-2 ml-2 hoverPointer'}>{`${projectName} ReadMe `}</h4>
							<p className={'my-auto ml-2 text-black-50'}> - Click to Open/Close</p>
						</Row>
					</>
					:
					<>
						<div className={'rowFix col-10 my-2 dualSexyShadows bg-ekshell rounded'}>
							<Row
								className={'d-flex justify-content-start align-items-center rounded-top hoverPointer demSexyShadows'}
								onClick={handleIsHidden}>
								<div className={'d-inline-block'}>
									<img
										src={Arrow}
										className={'d-block accordianArrowOpen ml-2'}
										id={'contactsArrow'}
										alt={'arrow pointing at text'}
									/>

								</div>
								<h4 className={' my-2 ml-2 hoverPointer'}>{`${projectName} ReadMe `}</h4>
								<p className={'my-auto ml-2 text-black-50'}> - Click to Open/Close</p>
							</Row>
							<Row className={'m-0 d-flex justify-content-start align-items-center rounded-top '}>
								<h6 className={'my-4 ml-2'}>This ReadMe is rendered by your browser as Markdown from a GET request to github - all Links navigate to github.<br/>You can alternatively view this document as intended on <a href={props.githubURL}>my Github.</a></h6>

							</Row>
							<Row className={'d-flex justify-content-start align-items-center rounded-bottom '}>
								<Col className={'col-lg markdownParent'}>
									<ReactMarkdown children={readMe}/>
								</Col>
							</Row>
						</div>
					</>
			)
	)
};