import { Route } from 'react-router-dom';
import { Debug, Page1, Page2 } from '../../pages';
import { IonRouterOutlet } from '@ionic/react';

const MainNavigation = () => {
  return (
    <IonRouterOutlet>
      <Route path="/reimbursement" exact component={Debug} />
      <Route path="/reimbursement/page1" exact component={Page1} />
      <Route path="/reimbursement/page2" exact component={Page2} />
    </IonRouterOutlet>
  );
};

export default MainNavigation;
