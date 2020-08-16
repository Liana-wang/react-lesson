import React from 'react';
import ContextPage from './pages/ContextPage';
import res from './funcs/compose'
import ReduxPage from './pages/ReduxPage';

function App() {
	console.log('res', res)
	return (
		<div className="App">
			app
			<div className={'border'}>
				<ContextPage />
			</div>

			<div className={'border'}>
				<ReduxPage />
			</div>

		</div>
	);
}

export default App;