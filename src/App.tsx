import { useEffect, useState } from 'react';
import CombineComponent from './combineComponent';
import { AuthContext } from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      setIsAuth,
      isAuth
    }}>
      <CombineComponent />
    </AuthContext.Provider>
  );
}

export default App;
