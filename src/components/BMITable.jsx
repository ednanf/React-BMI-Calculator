import Button from './Button';

import './BMITable.css';

const BMITable = ({ data, bmi, info, infoClass, resetCalc }) => {
	return (
		<div id="results-container">
			<p id="bmi-number">
				Your BMI: <span className={infoClass}>{bmi}</span>
			</p>
			<p id="bmi-classification">
				Classification: <span className={infoClass}>{info}</span>
			</p>
			<h3>Reference Table</h3>
			<div id="bmi-table">
				<div className="table-header">
					<h4>BMI</h4>
					<h4>Classification</h4>
					<h4>Obesity</h4>
				</div>
				{data.map((item) => (
					<div className="table-data" key={item.info}>
						<p>{item.classification}</p>
						<p>{item.info}</p>
						<p>{item.obesity}</p>
					</div>
				))}
			</div>
			<Button id="back-btn" text="Back" action={resetCalc} />
		</div>
	);
};

export default BMITable;
