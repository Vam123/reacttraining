var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavBar = React.createClass({

    render: function(){
        return(
            <div>
                <IndexLink to ="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About Us</IndexLink>
                <Link to ="/services" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Services</Link>
                <Link to ="/Locateus" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Locate Us</Link>
            </div>
            
        )
    }
});

module.exports = NavBar;