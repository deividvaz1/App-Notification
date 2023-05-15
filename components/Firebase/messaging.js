import { messaging, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { getToken, onMessage } from "firebase/messaging";

const VAPID_KEY = 'BIEe2B035Ffb_TKjCTQ8nmTS_UI5hc6hYdjYonaREZsj3KbLS7CVLc7asW4bPA74jChwkwYKL8BcchZLUndrjrc'
const FCM_TOKEN_COLLECTION = 'token_Collection'

export async function requestNotificationsPermissions(matricula) {
    console.log('Requesting notifications permissions...');
    console.log(matricula, 'dentro do save!')
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
        await saveMessagingDeviceToken(matricula);
    } else {
        console.log('Unable to get permission to notify.');
    }
}

export async function saveMessagingDeviceToken(matricula) {
    const msg = await messaging();
    const fcmToken = await getToken(msg, { vapidKey : VAPID_KEY});
    console.log ('fcmToken: ', fcmToken);
    if (fcmToken) {
        console.log('Got FCM device token: ', fcmToken);
        console.log(matricula, 'dentro do save!')
        //Save device token to Firestore
        const tokenRef = doc(db, FCM_TOKEN_COLLECTION, matricula);
        await setDoc(tokenRef, { fcmToken }); //overwrites

        onMessage(msg, (message) => {
            console.log(
                'New notification!',
                message.notification
            );
            new Notification(message.notification.title, { body: message.notification.body });
        })
    } else {
        //Need perm
        requestNotificationsPermissions(matricula);
    }
}