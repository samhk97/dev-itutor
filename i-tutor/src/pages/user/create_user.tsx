import { IonPage,IonGrid,IonRow,IonCol, IonImg, IonHeader, IonTitle, IonContent, IonButton, IonLabel, IonInput, IonItem} from '@ionic/react';
import React ,{useContext, useState}from 'react';
import { Auth } from 'aws-amplify';


const CreateUser: React.FC = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }
  return (
    <IonPage>
      <IonHeader>
          <IonTitle>page</IonTitle>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonItem>             
                <IonLabel>Username</IonLabel>
                <IonInput placeholder="username"  name="username" type="text" onIonChange={(e)=>setUsername(e.detail.value!)}></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonItem>             
                <IonLabel>Password</IonLabel>
                <IonInput placeholder="password"  name="password" type="text" onIonChange={(e)=>setPassword(e.detail.value!)}></IonInput>
            </IonItem>
          </IonRow>
          <IonRow>
            <IonButton onClick={()=>signUp()}>Sign Up</IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default CreateUser;