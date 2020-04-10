import React from 'react';
import {
  IonPage,
  IonHeader,
  IonContent,
  IonDatetime,
  IonButton,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonDatetime displayFormat="MM/DD/YYYY" placeholder="Select Date"></IonDatetime>
        <IonButton fill="clear">Start</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
