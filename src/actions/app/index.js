import { Navigation } from "react-native-navigation";

export const push = (componentId, screen,passProps={}) => dispatch => {
    Navigation.push(componentId, {
        component: {
          name: screen,
          passProps,
          options: {
            topBar: {
              visible: false,
              drawBehind: true
            }
          }
        }
      });
    };

    export const pop = componentId => dispatch => {
        Navigation.pop(componentId);
      };

      /**
 * Navigate to a new page and clear the backstack.
 */
export const resetTo=(newScreen)=>{
    return dispatch => {
      dispatch(navigate(newScreen, true));
    };
  }
  export const mergeOptions = (componentId, draweropen) => dispatch => {
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: draweropen
        }
      }
    });
  };

  /**
 * Internal helper method for setting the redux state
 */
export const navigate = (newScreen, reset) => ({
    type: t.SCREEN,
    screen: newScreen,
    isReset: reset
  });

  export const setScreenStack = (componentId, screen, visible) => {
    return dispatch => {
      Navigation.setStackRoot(componentId, [
        {
          component: {
            name: screen,
            passProps: {
              text: "Root screen"
            },
            options: {
              topBar: {
                title: {
                  text: "Pushed 1"
                }
              },
              bottomTabs: {
                visible,
                drawBehind: true
              },
              sideMenu: {
                left: {
                  visible: false,
                }
              }
            }
          }
        }
      ]);
    };
  };