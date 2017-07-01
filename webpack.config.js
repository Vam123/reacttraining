module.exports = {
entry: './public/app/app.jsx',
output:{
    path: __dirname,
    filename: './public/bundle.js'
},

module:{
    loaders:[
        {
            loader:'babel-loader',
            query:{
                presets:['react', 'es2015', 'stage-0']
            },
            test: /\.jsx?$/,
            exclude:/(node_modules|bower_components)/
        }
    ]
},
resolve:{
    root: __dirname,
    alias:{
       Greeter: 'Public/app/component/Greeter.jsx',
       GreeterMessage:'Public/app/component/GreeterMessage.jsx',
       GreeterForm:'Public/app/component/GreeterForm.jsx',
       Weather:'Public/app/weathercomponents/Weather.jsx',
       WeatherData:'Public/app/weathercomponents/WeatherData.jsx',
       WeatherForm:'Public/app/weathercomponents/WeatherForm.jsx',
       openWeatherMap:'Public/app/api/openWeatherMap.jsx',
       AboutUs:'Public/app/component/AboutUs.jsx',
       Services:'Public/app/component/Services.jsx',
       LocateUs:'Public/app/component/LocateUs.jsx',
       Main:'Public/app/component/Main.jsx',
       NavBar:'Public/app/component/Navbar.jsx'
    },
    extensions:['','.js','.jsx']
}
};