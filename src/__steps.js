
// *********** Firebase Setup ***********


/**
 * 1. visit: console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. create database (start in test mode) || creeate config
 * 4. install firebase: npm i firebase
 * 5. add config file to your project
 * 6. Dnager: do not publish or make firebase config to public by pushing those to github
 * 7. Visit: Go to Docs . Buiild > Authentication > Web > Get started > Copy the code
 * 8. export appp from the firebase.config.js file: export default app;
 * 9. CREATE const auth = getAuth(app);
 * 10. import googleAuthProvider from firebase.auth.GoogleAuthProvider(); and create a new provider
 * 11. use signInWithPopUp and pass auth and provider
 * 12. acctivate sign-in method (google, facebook, github, etc.)
 * [vite]: change 127.0.0.1 to localhost in the browser
 * */ 