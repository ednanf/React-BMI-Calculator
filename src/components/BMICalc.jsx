import { Icon } from './Icon';
import { useState } from 'react';

import Button from './Button';

import './BMICalc.css';

const BMICalc = ({ calcBMI }) => {
	const [height, setHeight] = useState('');
	const [weight, setWeight] = useState('');

	const clearForm = (e) => {
		e.preventDefault();
		setWeight('');
		setHeight('');
	};

	const validateDigits = (digits) => {
		return digits.replace(/[^0-9,]/g, '');
	};

	const handleHeightChange = (e) => {
		const validDigits = validateDigits(e.target.value);
		setHeight(validDigits);
	};

	const handleWeightChange = (e) => {
		const validDigits = validateDigits(e.target.value);
		setWeight(validDigits);
	};

	return (
		<div id="calc-container">
			<h2>
				<Icon iconName={'CalculatorFill'} />
				BMI Calculator
			</h2>
			<form id="bmi-form">
				<div className="form-inputs">
					<div className="form-control">
						<label htmlFor="height">Height</label>
						<input
							type="text"
							id="height"
							name="height"
							placeholder="1,75 (meters)"
							onChange={(e) => handleHeightChange(e)}
							value={height}
						/>
					</div>
					<div className="form-control">
						<label htmlFor="weight">Weight</label>
						<input
							type="text"
							id="weight"
							name="weight"
							placeholder="75,1 (kilograms)"
							onChange={(e) => handleWeightChange(e)}
							value={weight}
						/>
					</div>
					<div className="form-buttons">
						<Button
							id="calc-btn"
							text="Calculate"
							action={(e) => calcBMI(e, height, weight)}
						/>
						<Button
							id="clear-btn"
							text={<Icon iconName="Trash" />}
							action={clearForm}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BMICalc;
