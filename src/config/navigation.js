import { Navigation } from "react-native-navigation";
import App from "../actions/app";

export const goHome = () =>{
  
    Navigation.setRoot({  
      root: {
        sideMenu: {
          left: {
           visible:true,
            component: {
              id: "Drawer",
              name: "SideMenu",
          
            },
          },
          center: {
            stack: {
              id:'HOME',
              children: [{
                component: {
                  name:"Home",
                },
              
              }]
            },
           
          },
        }
      }
      });
  }