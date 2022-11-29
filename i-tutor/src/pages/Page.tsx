import { IonPage,IonGrid,IonRow,IonCol, IonImg, IonHeader, IonTitle, IonContent, IonButton} from '@ionic/react';
import React ,{useContext}from 'react';
import { UserContext } from '../userContext';

const Page: React.FC = () => {
  const user_data = useContext(UserContext);
  return (
    <IonPage>
      <IonHeader>
          <IonTitle>page</IonTitle>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>             
                123<IonButton></IonButton>
            </IonCol>
            <IonCol>{user_data}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Page;