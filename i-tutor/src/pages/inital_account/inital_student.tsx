import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { female,  male, map } from 'ionicons/icons';
import React, { useState } from 'react';


const Initial_student: React.FC = () => {
    const [errorToast, setErrorToast] = useState(false);
    const [errorMsg,setErrorMsg] = useState('');
    const Show_error = (errorText:string) =>{
        setErrorMsg(errorText);
        setErrorToast(true);
    }
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Update Student Info</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonList class="student_inital_form">
          <IonItem>
            <IonLabel position="fixed">稱呼</IonLabel>
            <IonInput placeholder="First Name"  name="firstName" type="text"></IonInput>
            <IonInput placeholder="Last Name" name="lastName" type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="fixed">性别</IonLabel>
            <IonSegment >
              <IonSegmentButton value="male">
                <IonIcon icon={male} />
                <IonLabel>男仔</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="female">
                <IonIcon icon={female} />
                <IonLabel>女仔</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonItem>
          {/*--------------------------------程度-------------------------------*/}
          <IonItem>
            <IonLabel position="fixed">程度</IonLabel>
          </IonItem>
          {/*--------------------------------地區-------------------------------*/}
          <IonItem>
            <IonLabel position="fixed">地區</IonLabel>
          </IonItem>
          {/*--------------------------------學校-------------------------------*/}
          <IonItem>
            <IonLabel position="fixed">學校</IonLabel>
          </IonItem>
          {/*-------------------------------年級------------------------------------*/}
          <IonItem>
            <IonLabel position="fixed">年級</IonLabel>
          </IonItem>
          {/*-------------------------------年級------------------------------------*/}
        </IonList>
        <IonItem lines="none">
          <IonButton type="submit"expand="block" fill="solid" class="loginpagebutton" >提交</IonButton>
        </IonItem>
        <IonToast isOpen={errorToast} onDidDismiss={() => setErrorToast(false)} message={errorMsg} duration={1000} position='middle' cssClass='login-error-toast-custom-class' />
    </IonContent>
  </IonPage>
  );
};
export default Initial_student;