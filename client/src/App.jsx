import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { StartPageComponent } from 'components';
import { PageOneComponent } from 'components';
import { PageTwoComponent } from 'components';
import { AddWriter } from 'components';
import { UpdateWriter } from 'components';
import { Navbar } from 'components';

export const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={['/', '/defaultPath']} component={StartPageComponent} />

					<Route exact path={['/PageOneComponent']} component={PageOneComponent} />
					<Route exact path={['/PageTwoComponent']} component={PageTwoComponent} />

					<Route exact path={['/AddWriter']} component={AddWriter} />
					<Route exact path={['/UpdateWriter/:id']} component={UpdateWriter} />
				</Switch>
			</Router>
		</>
	);
};
