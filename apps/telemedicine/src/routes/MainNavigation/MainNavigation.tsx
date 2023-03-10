import { Route } from 'react-router-dom';
import { Debug, Page1, Page2 } from '../../pages';
import { IonRouterOutlet } from '@ionic/react';

const MainNavigation = () => {
  return (
    <IonRouterOutlet>
      <Route path="/telemedicine" exact component={Debug} />
      <Route path="/telemedicine/page1" exact component={Page1} />
      <Route path="/telemedicine/page2" exact component={Page2} />
    </IonRouterOutlet>
  );
};

export default MainNavigation;
