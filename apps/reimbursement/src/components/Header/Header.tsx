import React from 'react';

import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import './Header.css';

type HeaderProps = {
  children: React.ReactNode;
  backText?: string;
};

const Header = ({ children, backText }: HeaderProps) => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{children}</IonTitle>
        {backText && (
          <IonButtons slot="start">
            <IonBackButton text={backText} />
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
