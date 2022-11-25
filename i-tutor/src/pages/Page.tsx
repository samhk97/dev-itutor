import { IonPage,IonGrid,IonRow,IonCol, IonImg, IonHeader, IonTitle, IonContent} from '@ionic/react';
import React from 'react';
const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
          <IonTitle>page</IonTitle>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>             
                123
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Page;