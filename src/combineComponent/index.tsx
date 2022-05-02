import './../App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { useContext } from 'react';
import { AuthContext } from '../context';

const CombineComponent = () => {
  const {isAuth} = useContext(AuthContext)

  return (
    <div className='App'>
      { isAuth ?
      <Switch>
        {privateRoutes.map((route: any) => {
            return <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          })}
          <Redirect to='/'/>
        </Switch>
        : 
        <Switch>
          {publicRoutes.map((route: any) => {
          return <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
          })}
          <Redirect to='/login'/>
        </Switch>
    }
    </div>
  );
}

export default CombineComponent;
