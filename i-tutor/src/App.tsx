import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from './userContext';
/* Pages */
import Menu from './components/Menu';
import Page from './pages/Page';
import Select_role from './pages/inital_account/select_role';
import Initial_student from './pages/inital_account/inital_student';
import CreateUser from './pages/user/create_user';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';


/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


/* Theme variables */
import './theme/variables.css';
//*--------aws
import "@aws-amplify/ui-react/styles.css";
import {withAuthenticator} from '@aws-amplify/ui-react';
import { Amplify,API } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

setupIonicReact();
function user_data(){

  console.log('123');
}

const App: React.FC = () => {
  console.log('app');
  console.log(Amplify.Auth.user.username);
  const user_name =Amplify.Auth.user.username;
  user_data();
  return (
    <IonApp>
      <UserContext.Provider value={''}>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/page/Inbox" />
              </Route>
              <Route path="/page/:name" exact={true}>
                <Page />
              </Route>
              {/*------------------ inital account ------------------*/}
              <Route path="/pages/createuser" exact={true}>
                <CreateUser />
              </Route>
              <Route path="/pages/initial_account/select_role" exact={true}>
                <Select_role />
              </Route>
              <Route path="/pages/initial_account/student" exact={true}>
                <Initial_student />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </UserContext.Provider>
    </IonApp>
  );
};

export default withAuthenticator(App,{socialProviders:['google']});
