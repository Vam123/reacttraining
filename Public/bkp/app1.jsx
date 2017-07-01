var Welcome = React.createClass({

render: function(){
var nameA = this.props.nameB;
return(
    <div>
        <h1>Hello {nameA}!</h1>
    </div>
);
}
})
    
    ReactDOM.render(

        <Welcome nameB="Test"/>,
         document.getElementById('app')
    );