import React from 'react';
import ReactDOM from 'react-dom';

export class Product extends React.Component{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		return(
			<div className='item'>
				<div className='image'>
					<img src={this.props.product_image_url}></img>
				</div>
				<div className='middle aligned content'>
					<div className='header'>
						<a>
							<i className='large caret up icon'></i>
						</a>
						{this.props.votes}
					</div>
					<div className='description'>
						<a href={this.props.url}>
							{this.props.title}
						</a>
					</div>
					<div className='extra'>
						<span>Submitted by:</span>
						<img className='ui avatar image' src={this.props.submitter_avatar_url}></img>
					</div>
				</div>
			</div>
		);
	}
}

