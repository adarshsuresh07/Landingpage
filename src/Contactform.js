import React from 'react'
import Style from './Landingpage.module.css'
class Contact extends React.Component {
	render(){
		return(
			<div className={Style.contact_form}>
			<div className={Style.logo}>
			<img src={require('./A.png')}/>
			<p>Welcome to Agora, Hop on to get connected with the Architect professionals in town</p>
			</div>
			<div className={Style.buttonc}>
				<button>Sign-in</button>
				<button>Sign-up</button>
				<p>Continue without signing in</p>
			</div>
			</div>
			);
	}
}
export default Contact;