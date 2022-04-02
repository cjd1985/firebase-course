// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: "AIzaSyDg2a5g5xlMOc0J3fGZLa_8kCmqDTqXa3s",
    authDomain: "au-ddotx-firebase.firebaseapp.com",
    projectId: "au-ddotx-firebase",
    storageBucket: "au-ddotx-firebase.appspot.com",
    messagingSenderId: "1070705907456",
    appId: "1:1070705907456:web:dee7b132f8e4e7665d45e5"
  },
  api: {
      createUser: "http://localhost:5001/fir-course-recording-c7f3e/us-central1/createUser"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
