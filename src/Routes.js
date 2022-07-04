import { Router, Route, Switch } from 'react-router-dom';

import Home from "./components/home";
import Privacy from "./components/privacy/privacy";


export default function Routes({ history }) {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/privacy" component={Privacy} />
			</Switch>
		</Router>
	);
}