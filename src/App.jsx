import { data } from './data/data';
import { useState } from 'react';

import BMICalc from './components/BMICalc';
import BMITable from './components/BMITable';

import './App.css';

function App() {
	const [bmi, setBMI] = useState('');
	const [info, setInfo] = useState('');
	const [infoClass, setInfoClass] = useState('');

	const calcBMI = (e, height, weight) => {
		e.preventDefault();

		const weightFloat = +weight.replace(',', '.');
		const heightFloat = +height.replace(',', '.');

		const bmiResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

		if (!height || !weight) return;

		setBMI(bmiResult);

		data.forEach((item) => {
			if (bmiResult >= item.min && bmiResult <= item.max) {
				setInfo(item.info);
				setInfoClass(item.infoClass);
			}
		});

		if (!info) return;
	};

	const resetCalc = (e) => {
		e.preventDefault();

		setBMI('');
		setInfo('');
		setInfoClass('');
	};

	return (
		<div id="background-container">
			<div className="container">
				{!bmi ? (
					<BMICalc calcBMI={calcBMI} />
				) : (
					// data vem do arquivo data.js e será passado para BMITable para preencher a tabela
					<BMITable
						data={data}
						bmi={bmi}
						info={info}
						infoClass={infoClass}
						resetCalc={resetCalc}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
