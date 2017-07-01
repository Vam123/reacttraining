
var React = require('react');

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    var password=this.refs.pwd.value;
    var email=this.refs.email.value;
    var country=this.refs.country.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = '';
      updates.message = message;
    }
    if (password.length > 0) {
      this.refs.pwd.value = '';
      updates.password = password;
    }
    if (email.length > 0) {
      this.refs.email.value = '';
      updates.email = email;
    }
    if (country.length > 0) {
      this.refs.country.value = '';
      updates.country = country;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
          <input type="password" ref="pwd" placeholder="Enter password"/>
        </div>
         <div>
          <input type="text" ref="email" placeholder="Enter Email"/>
        </div>
         <div>
          <input type="text" ref="country" placeholder="Enter Country Name"/>
        </div>
        <div>
          <textarea ref="message" placeholder="Enter message"></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = GreeterForm;