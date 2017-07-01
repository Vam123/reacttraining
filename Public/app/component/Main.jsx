var React = require('react');
var NavBar = require('NavBar');

var Main = React.createClass({

    render: function(){
        return(
            <div>
            <NavBar/>
            <h2>Main Component</h2>
            {this.props.children}
            </div>
        )
    }
});

module.exports = Main;