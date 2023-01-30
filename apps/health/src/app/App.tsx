import { getInitialContext } from '@ionic/portals';
import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Debug } from '../pages';
import { IonRouterOutlet } from '@ionic/react';

const Telemedicine = React.lazy(() => import('telemedicine/Module'));

type NavigationContext = {
  initialRoute: string;
};

const initialNavigationContext = {
  initialRoute: '/',
};

const TelemedicineWrapper = () => {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Telemedicine />
    </React.Suspense>
  );
};

export function App() {
  const { initialRoute } =
    getInitialContext<NavigationContext>()?.value ?? initialNavigationContext;

  return (
    <IonRouterOutlet>
      <Route path="/" exact>
        {initialRoute !== '/' ? <Redirect to={initialRoute} /> : <Debug />}
      </Route>
      <Route path="/telemedicine" render={TelemedicineWrapper}></Route>
    </IonRouterOutlet>
  );
}

export default App;
