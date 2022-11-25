import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { useParams } from 'react-router';

const Select_role :React.FC = () => {

  const [errorToast, seterrorToast] = useState(false);
  const [userRole, setuserRole] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const pressupdateUserinfo= () =>{
    console.log('press submit');
  } 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Update User Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonList class="Formbody">
          <IonItem>
          <IonLabel position="fixed">賬戶類別</IonLabel>
          </IonItem>
            <IonItem>
              <IonButton size="large">家長</IonButton>
              <IonButton size="large" href="/pages/initial_account/student">學生</IonButton>
            </IonItem>          
          <IonItem>
              <IonButton size="large">補習社</IonButton>
              <IonButton size="large">補習老師</IonButton>
            </IonItem>
          </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Select_role;
