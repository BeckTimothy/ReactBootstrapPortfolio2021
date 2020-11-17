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
import {Header} from "./shared/components/headerBar/HeaderBar.js";
import {Container, Row} from "react-bootstrap";
import './styles.css';


const store = createStore(applyMiddleware(thunk));
const Routing = (store) => (
	<>
		<Provider store={store}>
			<BrowserRouter>
				<Container fluid>
					<Row className={'sticky-top d-block'}>
						<Header/>
					</Row>
					<Row>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route component={FourOhFour}/>
						</Switch>
					</Row>
				</Container>
			</BrowserRouter>
		</Provider>
	</>
);
ReactDOM.render(Routing(store), document.querySelector('#root'));