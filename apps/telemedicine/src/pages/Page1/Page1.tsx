import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React from 'react';
import { Header } from '../../components';

const Page1 = (): React.ReactElement => {
  const router = useIonRouter();

  return (
    <IonPage>
      <Header backText="Back">Page 1</Header>
      <IonContent className="ion-padding">
        <IonButton
          expand="block"
          onClick={() => router.push('/telemedicine/page2')}
        >
          Navigate to Page 2
        </IonButton>
        <IonButton expand="block" onClick={() => router.push('/reimbursement')}>
          Navigate to Reimbursement
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page1;
