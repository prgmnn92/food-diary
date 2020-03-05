import React from 'react';

import Item from '../item/item.component';

const ItemList = ({ items, clickEvent }) => (
	<div>
		{items.map((item) => {
			return <Item clickEvent={clickEvent} key={item.fields.item_id} item={item} />;
		})}
	</div>
);

export default ItemList;
