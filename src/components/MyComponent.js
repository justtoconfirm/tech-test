import React, { Component } from 'react';

class MyComponent extends Component {
	constructor(props) {
		super(props);
		/*this.state = {
			error: null,
			isLoaded: false,
			items: []
		};*/
		this.state = {
			pictures: []
		};
	}

	// Lifecycle method: fetch + api call
	componentDidMount() {
		//fetch("https://api.example.com/items")
		/*fetch("https://randomuser.me/api/?results=500")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result.items
				});
			},*/
		.then(results => {
			return results.json();
		}).then(data => {
			let pictures = data.results.map((pic) => {
				return(
					<div key={pic.results}>
						<img src={pic.picture.medium} />
					</div>
				)
			})
		})
			/*
			Handle errors here
			Instead of a catch() block so we don't swallow
			exceptions from actual bugs in components.
			*/
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}

	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<ul>
					{items.map(item => (
						<li key={item.name}>
							{item.name} {item.price}
						</li>
					))}
				</ul>
			);
		}
	}
}

export default MyComponent;