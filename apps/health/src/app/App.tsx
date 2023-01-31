import Portals, { getInitialContext } from '@ionic/portals';
import React, { useCallback, useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Debug } from '../pages';
import { IonRouterOutlet } from '@ionic/react';

const Telemedicine = React.lazy(() => import('telemedicine/Module'));
const Reimbursement = React.lazy(() => import('reimbursement/Module'));

type Messages = { topic: 'host:loaded'; data: boolean };

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
const ReimbursementWrapper = () => {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Reimbursement />
    </React.Suspense>
  );
};

export function App() {
  const publishAppLoaded = useCallback(async () => {
    await Portals.publish<Messages>({ topic: 'host:loaded', data: true });
  }, []);

  useEffect(() => {
    publishAppLoaded();
  }, [publishAppLoaded]);

  const { initialRoute } =
    getInitialContext<NavigationContext>()?.value ?? initialNavigationContext;

  return (
    <IonRouterOutlet>
      <Route path="/" exact>
        {initialRoute !== '/' ? <Redirect to={initialRoute} /> : <Debug />}
      </Route>
      <Route path="/telemedicine" render={TelemedicineWrapper} />
      <Route path="/reimbursement" render={ReimbursementWrapper} />
    </IonRouterOutlet>
  );
}

export default App;
