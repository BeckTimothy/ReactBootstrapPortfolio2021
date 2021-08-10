import React from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

//import {combinedReducers} from "./shared/reducers/index";
import {FourOhFour} from "./pages/fourOhFour/FourOhFour";
import {Home} from "./pages/home/Home.js";
import {Portfolio} from "./pages/portfolio/Portfolio.js";
import {Project} from "./pages/project/Project.js";
import {Header} from "./shared/components/headerBar/HeaderBar.js";
import {Container, Row, Col} from "react-bootstrap";
import './styles.css';

//json imported
import portfolioJson from './shared/utils/portfolio.json'
const portJson = portfolioJson;
document.body.classList.add("hideOverflowX");

const store = createStore(applyMiddleware(thunk));
const Routing = (store) => (
	<>
		<Provider store={store}>
			<BrowserRouter>
				<Container fluid className={'bg-secondary vh-100'}>
					<Row className={'sticky-top d-block'}>
						<Header/>
					</Row>
					<Row className={"justify-content-center"}>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/Portfolio" component={Portfolio}/>
							{portJson.map(portfolioItem => {
								let cardHidden = portfolioItem.projectHidden || portfolioItem.projectPortfolioURL === "";
								//Generate routes to pages for each non-hidden project in portfolio json
								return (!cardHidden ?
										<Route exact path={portfolioItem.projectPortfolioURL} component={Project} /> : <></>
								)
							})}
							<Route component={FourOhFour}/>
						</Switch>
					</Row>
				</Container>
			</BrowserRouter>
		</Provider>
	</>
);
ReactDOM.render(Routing(store), document.querySelector('#root'));