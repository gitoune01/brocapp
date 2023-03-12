import { useEffect } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import {

} from 'react-native';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';
import Signin from './src/screens/auth/Signin';

GOOGLE_WEB_CLIENT_ID = '718713868858-kp167unlvnf3uvsm61ebb0ma3skq2kov.apps.googleusercontent.com'



const App = () => {

useEffect(()=>{
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  });

},[])

  return (
    
    // <Splash />
    <Signin />
  );
};

export default App;
