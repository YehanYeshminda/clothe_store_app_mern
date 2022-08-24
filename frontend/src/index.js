import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from './store/StateProvider';
import { InitialState } from './store/InitialState';
import reducer from './store/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<StateProvider initalState={InitialState} reducer={reducer}>
				<App />
			</StateProvider>
		</BrowserRouter>
	</React.StrictMode>
);
