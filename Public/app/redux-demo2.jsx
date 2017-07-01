var redux = require('redux');
var axios = require('axios');

var stateDefault = {

    name:'Anonymous',
    hobbies: [],
    departments: []
};

var nextHobbyId = 1;
var nextDepartmentId = 1;

console.log('starting redux example');

var mapReducer = (state = {isFetching:false, url:undefined}, action) =>{
    switch(action.type){
        case 'START_LOCATION_FETCH':
        return{
            isFetching: true,
            url: undefined
        };

        case 'COMPLETE_LOCATION_FETCH':
        return{
            isFetching: false,
            url: action.url
        };
        default:
        return state;
    }
};

var startLocationFetch = ()=>{
    return{
        type: 'START_LOCATION_FETCH'
    };
};

var completeLocationFetch = (url) =>{
    return{
        type:'COMPLETE_LOCATION_FETCH',
        url
    };
};

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var changeName = (name) => {
    return{
        type:'CHANGE_NAME',
        name
    }
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
   case 'ADD_HOBBY':
    return[
        ...state,     
            {
                id:nextHobbyId++,
                hobby: action.hobby
            }
        ]
    
    default:
      return state;
  }
};

var addHobby = (hobby) => {
    return{
        type: 'ADD_HOBBY',
        hobby
    }
}


var departmentReducer = (state = [], action) => {

switch(action.type) {
    case 'ADD_DEPARTMENT':
    return[
        ...state,
       
            {
                id:nextDepartmentId++,
                department: action.department
            }
        
    ]
    default:
    return state;
}
    
};


var fetchLocation = () => {
    store.dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function (res){
        var loc = res.data.loc;
        var baseUrl = 'http://maps.google.co.in?q='

        store.dispatch(completeLocationFetch(baseUrl + loc));
    });
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  departments: departmentReducer,
  map: mapReducer

});

var store = redux.createStore(reducer, redux.compose(
window.devToolsExtension? window.devToolsExtension(): f => f
));

var us = store.subscribe(()=>{
    var state = store.getState();
    
    console.log('new state', store.getState());

    if(state.map.isFetching){
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url){
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '"target="_blank">view your Location</a>';
    }
    
    console.log('name is', state.name, state.hobbies, state.departments);
})

var currentState = store.getState();
console.log('currentState', currentState);

fetchLocation();

store.dispatch(changeName('valuemomentum'));

// store.dispatch({
//     type:'CHANGE_NAME',
//     name: 'ValueMomentum'
// });

store.dispatch(addHobby('Running'));

// store.dispatch({
//     type:'ADD_HOBBY',
//     hobby: 'Running'
// });

store.dispatch({
    type:'ADD_HOBBY',
    hobby: 'swimming'
});

store.dispatch({
    type:'ADD_DEPARTMENT',
    department: 'ECE'
});

store.dispatch({
    type:'CHANGE_NAME',
    name: 'ValueMomentum2'
});
//console.log('name should be valuemomentum', store.getState())