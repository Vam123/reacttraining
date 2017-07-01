var Welcome = React.createClass({

render: function(){
return(
    <div>
        <h1>Hello React!</h1>
       <h1>Hello Word React js</h1>
       <p>This is form a component</p>
    </div>
);
}
})
    
    ReactDOM.render(

        <Welcome/>,
        
         document.getElementById('app')
    );