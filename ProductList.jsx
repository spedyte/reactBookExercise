import React from 'react';
import ReactDOM from 'react-dom';

import {Product} from './Product.jsx'

export class ProductList extends React.Component{
	constructor(props)
	{
		super(props);
		this.handleProductUpVote = this.handleProductUpVote.bind(this);
		this.handleProductDownVote = this.handleProductDownVote.bind(this);
		this.state={productos:[], inDecrement :1};
	}

	componentWillMount() {
		this.updateState();
	}

	updateState() {
		//alert('updateState::'+this.state.inDecrement);
		let productsUS = Data.sort((a, b) => {
			if (this.state.inDecrement)
				return b.votes - a.votes;
			else
				return a.votes - b.votes;
		});
		this.setState({ products: productsUS });
	}

	handleProductUpVote(productId)
	{
		Data.forEach((el) => {
			if (el.id === productId) 
			{
				el.votes = el.votes + 1;
				return;
			}
		});
		this.updateState();
	}

	handleProductDownVote(productId)
	{
		Data.forEach((el) => {
			if (el.id === productId) 
			{
				el.votes = el.votes - 1;
				return;
			}
		});
		this.updateState();
	}

	setOrderDirection(orderDirection){
		//alert('setORder::'+orderDirection);
		this.setState({ inDecrement: orderDirection });
		this.updateState();
	}

	render()
	{
		let productsL = this.state.products.map( (product) =>{
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
						onVote={this.handleProductUpVote}
						onVoteDown={this.handleProductDownVote}
						/>
					);
				}
			);

		return (
				<div className='middle aligned content'>
						<div className='header'>
							<a onClick={this.setOrderDirection.bind(this,1)}>
								<i className='large caret up icon'></i>
							</a>
							<a onClick={this.setOrderDirection.bind(this,0)}>
								<i className='large caret down icon'></i>
							</a>
						</div>
					<div className='ui items'>
						{productsL}
					</div>
				</div>
			);
	}
}