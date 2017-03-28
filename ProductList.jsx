import React from 'react';
import ReactDOM from 'react-dom';

import {Product} from './Product.jsx'

export class ProductList extends React.Component{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const products = Data.map( (product) =>{
					return (
						<Product
						key={'product-' + product.id}
						id={product.id}
						title={product.title}
						description={product.description}
						url={product.url}
						votes={product.votes}
						submitter_avatar_url={product.submitter_avatar_url}
						product_image_url={product.product_image_url}
						/>
					);
				}
			);

		return (
				<div className='ui items'>
					{products}
				</div>
			);
	}
}