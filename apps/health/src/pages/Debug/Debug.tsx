import { IonButton, IonContent, IonPage } from '@ionic/react';
import React from 'react';

const Debug = (): React.ReactElement => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonButton expand="block" href="/telemedicine">
          Go to Telemedicine MFE
        </IonButton>
        <IonButton expand="block" href="/reimbursement">
          Go to Reimbursement MFE
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Debug;
