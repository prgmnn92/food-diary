import React from 'react';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import './added-item.styles.scss';

const AddedItem = ({ item }) => {
	let infoColor = '';

	if (item.fats > item.proteins && item.fats > item.carbohydrates) {
		infoColor = 'danger';
		console.log('DANGER');
	} else if (item.proteins > item.fats && item.proteins > item.carbohydrates) {
		infoColor = 'success';
	} else {
		infoColor = 'primary';
	}

	return (
		<div className="added-item">
			<Toast className="toast">
				<ToastHeader className="toast-header" icon={infoColor}>
					{item.itemName}
				</ToastHeader>
				<ToastBody className="toast-body">
					<div>Proteins: {item.proteins.toFixed(0)}</div>
					<div>Carbohydrates: {item.carbohydrates.toFixed(0)}</div>
					<div>Fats: {item.fats.toFixed(0)}</div>
					<div>Calories: {item.calories.toFixed(0)}</div>
				</ToastBody>
			</Toast>
		</div>
	);
};

export default AddedItem;
