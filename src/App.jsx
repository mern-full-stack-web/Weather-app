 import React from "react";
import './App.css';
import WeatherAppComponent from "./Components/WeatherAppComponent/WeatherAppComponent";
import QueryWeatherAppComponent from "./Components/QueryWeatherAppComponent/QueryWeatherAppComponent";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient=new QueryClient()

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <QueryWeatherAppComponent/>
      </QueryClientProvider>
    </React.Fragment>
 
  )
  
}

 export default App;