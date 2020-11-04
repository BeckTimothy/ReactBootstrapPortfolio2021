import React from "react"


export const FourOhFour = () => {
	return (
		<>
			<h1 className={'px-4 pt-4'}>{`Error 404`}</h1>
			<p className={'px-4 pt-4'}>{`There has been an error processing your request, please navigate back to`} <a
				className="text-dark" id={'Link to HomePage'} href={'/'}>NMSavin.com</a>{` to continue browsing our website.`}
			</p>
		</>
	)
};