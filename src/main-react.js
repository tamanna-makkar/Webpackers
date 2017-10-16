var React = require('react');
var ReactDom = require('react-dom');
class Message extends React.Component {
	render(){
		return ( <div>
				    <h1>{this.props.title}</h1>
				    <p>{this.props.message}</p>
				</div> );
    }
}
ReactDom.render(<Message title="Email joe" message="Can you email him?"/>,document.getElementById('react-container'));