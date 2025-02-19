import AddLab from "../screens/addLab";
import Dashboard from "../screens/dashboard";
import DynamicData from "../screens/dynamicData";
import Home from "../screens/home";
import Institute from "../screens/institute";
import SeenReport from "../screens/seenReport";
import StaticData from "../screens/staticData";

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
    },
    addLab:{
        id: '4',
        path:'/add-lab',
        element:<AddLab/>
    },
    staticData:{
        id: '5',
        path:'/static-data',
        element:<StaticData/>
    },
    dynamicData:{
        id: '6',
        path:'/dynamic-data',
        element:<DynamicData/>
    },
    seenReport:{
        id: '7',
        path:'/seen-report',
        element:<SeenReport/>
    },
}