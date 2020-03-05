import React from 'react';

import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ItemCard = ({ item, clickEvent }) => (
	<div>
		<Card body>
			<CardTitle>{item.item_name}</CardTitle>
			<CardText>
				<span>Proteins:{item.nf_protein}</span>
				<br />
				<span>Carbohydrates:{item.nf_total_carbohydrate}</span>
				<br />
				<span>Fats:{item.nf_total_fat}</span>
				<br />
				<span>Calories:{item.nf_calories}</span>
				<br />
				<span>Servign Size:{item.nf_serving_weight_grams}</span>
				<br />
				<Button onClick={() => clickEvent(item)} color="primary">
					Add To List
				</Button>
			</CardText>
		</Card>
	</div>
);

export default ItemCard;
