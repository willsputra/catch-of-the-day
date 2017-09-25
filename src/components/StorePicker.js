import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	// constructor(){
	// 	super();
	// 	this.goToStore = this.goToStore.bind(this);
	// }


	goToStore(event) {
		event.preventDefault();
		console.log("You changed the URL");
		//first grab the text from the box
		//how to reference StorePicker in self-created method? use constructor of the component (check out the constructor above!)
		//or put the this.goToStore.bind in the onSubmit below
		const storeId = this.storeInput.value;
				//second we're going to transition from / to /store/:storeId
		this.context.router.transitionTo(`/store/${storeId}`);
	}

	render() {
		//this is in JSX!
		//You can only return A SINGLE PARENT ELEMENTT!
		return  (
			<form className="store-selector" onSubmit={(e) => this.goToStore(e)}> 
				{/*Hello*/}
				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input}} />
				<button type="Submit">Visit Store -> </button>
			</form>
		)
	}
}

StorePicker.contextTypes = {
	router: React.PropTypes.objects
}

export default StorePicker;