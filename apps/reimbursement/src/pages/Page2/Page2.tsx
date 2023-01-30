import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React from 'react';
import { Header } from '../../components';

const Page2 = (): React.ReactElement => {
  const router = useIonRouter();

  return (
    <IonPage>
      <Header backText="Back">Reimbursement Page 2</Header>
      <IonContent className="ion-padding">
        <IonButton
          expand="block"
          onClick={() => router.push('/reimbursement/page1')}
        >
          Navigate to Page 1
        </IonButton>
        <IonButton expand="block" onClick={() => router.push('/telemedicine')}>
          Navigate to MFE Telemedicine
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Page2;
