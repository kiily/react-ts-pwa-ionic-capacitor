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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IonButton fill="clear">Start</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
