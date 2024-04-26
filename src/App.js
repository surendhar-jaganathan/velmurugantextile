
import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Route } from 'react-router';
import { Routpath } from './routepath/path';
import start1 from './pages/start1';
import ViewLoader from './viewloader';
function App() {

  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state => state);
 

  useEffect(()=>{

  },[])

  history.listen((newLocation, action) => {
    if (action != "PUSH") {
      history.go(1);
    }
  });
  
  function useNavigator(history,menuList) {
   
        let currentMenu=menuList.find(p=>p.url===history.location.pathname);
        return [currentMenu?currentMenu.form:'Blank'];
  
  }

  const [pathname] = useNavigator(history, Routpath);
  return (
    < >
        <Route exact path='/' component={start1} />
        <Route exact path='/g/:code' render={() => <ViewLoader componentName={pathname} key="2"></ViewLoader>} />
    </>
  );
}

export default App;
