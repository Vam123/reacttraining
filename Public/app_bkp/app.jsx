var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Greeter = require('Greeter');
var Weather = require('Weather');
var About = require('AboutUs');
var Services = require('Services');
var LocateUs = require('LocateUs'); 



ReactDOM.render(
  <Router history = {hashHistory}>
      <Route path = "/" component = {Main}>
         <IndexRoute component = {Weather} />
         <Route path = "services" component = {Services} />
         <Route path = "Locateus" component = {LocateUs} />
      </Route>
   </Router>,
  document.getElementById('app') 
);
