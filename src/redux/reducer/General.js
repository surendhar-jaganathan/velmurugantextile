import { NAVIGATION,MENULIST,APPDATA} from "../actions/GeneralAction";
const initialState = { 
   activeNavigation:'',
   menuList:[],
   appData:null
};
function reducer(state = initialState, action) {
    switch (action.type) {
      case "reset":
        return initialState;
     
      case NAVIGATION:
        return {
          ...state,
          activeNavigation: action.payload
        };
        case MENULIST:
          return {
            ...state,
            menuList: action.payload
          };
          case APPDATA:
            return {
              ...state,
              appData: action.payload
            };
      default:
        return state;
    }
  }


  export {reducer as default}