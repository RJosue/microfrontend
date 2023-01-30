import { IonButton, IonContent, IonPage, useIonRouter } from '@ionic/react';
import React from 'react';
import { Header } from '../../components';

const Debug = (): React.ReactElement => {
  const router = useIonRouter();
  return (
    <IonPage>
      <Header>Debug</Header>
      <IonContent className="ion-padding">
        <IonButton
          expand="block"
          onClick={() => router.push('/telemedicine/page1')}
        >
          Navigate to Page 1
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => router.push('/telemedicine/page2')}
        >
          Navigate to Page 2
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Debug;
