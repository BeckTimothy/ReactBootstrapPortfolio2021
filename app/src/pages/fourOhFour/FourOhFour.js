import React from "react"
import {Col} from "react-bootstrap";
import {Buttsss} from "../../shared/components/buttsss/Buttsss.js"

export const FourOhFour = () => {
    return (
        <>
            <Col className={'d-flex flex-column align-items-center'}>
                    <h1 className={'px-4 pt-4'}>{`Error 404`}</h1>
					<Buttsss />
                    <p className={'px-4 pt-4 text-center'}>{`The page you've requested could not be found, please navigate back to `}
                        <a
                            className="text-dark" id={'Link to HomePage'}
                            href={'https://TimothyBeck.com'}>TimothyBeck.com</a>{` to continue browsing our website.`}
                    </p>

            </Col>
        </>
    )
};