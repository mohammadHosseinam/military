import Dashboard from "../screens/dashboard";
import Home from "../screens/home";
import Institute from "../screens/institute";

export const routes = {
    home:{
        id:'1',
        path:'/',
        element:<Home/>
    },
    institute:{
        id: '2',
        path:'/institute',
        element:<Institute/>
    },
    dashboard:{
        id: '3',
        path:'/dashboard',
        element:<Dashboard/>
    }




    
}