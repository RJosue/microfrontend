import { IonButton, IonContent, IonPage } from '@ionic/react';
import React from 'react';

const Debug = (): React.ReactElement => {
  return (
    <IonPage>
      HEALTH PORTAL
      <IonContent className="ion-padding">
        <IonButton expand="block" href="/telemedicine">
          Go to Telemedicine MFE
        </IonButton>
        <IonButton expand="block" href="/">
          Go to Reimbursement MFE (TODO)
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Debug;
