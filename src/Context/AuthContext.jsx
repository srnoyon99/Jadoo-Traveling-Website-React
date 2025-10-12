import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider, FacebookAuthProvider, signInAnonymously, sendPasswordResetEmail, updateProfile, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../service/firebase/firebase.config";

export const AuthContext = createContext({
     currentUser: null,
     loading: true,
     signup: () => { },
     login: () => { },
     logout: () => { },
     gmailLogin: () => { },
     facebookLogin: () => { },
     anonymouslyLogin: () => { },
     getUserInfo: () => { },
     updateUserInfo: () => { },
     resetPassword: () => { },
})

const AuthProvider = ({ children }) => {
     const [currentUser, setCurrentUser] = useState(null);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          setLoading(true)
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               setCurrentUser(user)
               setLoading(false)
          });

          return () => unsubscribe()

     }, [])

     const signup = (email, password, navigate) => {
          createUserWithEmailAndPassword(auth, email, password)
               .then(() => {
                    sendEmailVerification(auth.currentUser)
                         .then(() => {
                              alert("Email Verification Sent! Check Your Email")

                              if (navigate) {
                                   return navigate("/auth/login")
                              }

                         }).catch((err) => {
                              console.log("Verification Faild");
                         })
               })
     }

     const login = (email, password) => {

          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);

               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
               });
     }

     const logout = () => {
          signOut(auth)
     }

     const gmailLogin = () => {

          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
               .then((result) => {
                    // This gives you a Google Access Token. You can use it to access the Google API.
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    // The signed-in user info.
                    const user = result.user;
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
               }).catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
               });
     }

     const facebookLogin = () => {

          const provider = new FacebookAuthProvider();
          signInWithPopup(auth, provider)
               .then((result) => {
                    // The signed-in user info.
                    const user = result.user;
                    console.log(user.providerData[0].providerId);


                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    const credential = FacebookAuthProvider.credentialFromResult(result);
                    const accessToken = credential.accessToken;

                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
               })
               .catch((error) => {
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = FacebookAuthProvider.credentialFromError(error);
                    // ...
               });

     }

     const anonymouslyLogin = () => {

          signInAnonymously(auth)
               .then(() => {
                    // Signed in..
               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ...
               });
     }

     const updateUserInfo = ( name, photo ) => {

          updateProfile(auth.currentUser, {
               displayName: name , photoURL: photo
          }).then(() => {
               // Profile updated!
               console.log("User Update Done");
          }).catch((error) => {
               // An error occurred
               console.log( error.message );
          });
     }

     const getUserInfo = () => {

          const user = auth.currentUser;
          if (auth !== null) {
               // The user object has basic properties such as display name, email, etc.
               const displayName = user.displayName;
               const email = user.email;
               const photoURL = user.photoURL;
               const emailVerified = user.emailVerified;

               // The user's ID, unique to the Firebase project. Do NOT use
               // this value to authenticate with your backend server, if
               // you have one. Use User.getToken() instead.
               const uid = user.uid;
          }
     }

     const resetPassword = (email) => {
          sendPasswordResetEmail(auth, email)
               .then(() => {
                    // Password reset email sent!
                    // ..
                    alert("Password reset email sent!")
               })
               .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                    // ..
               });
     }

     const Value = { currentUser, loading, signup, login, logout, gmailLogin, facebookLogin, anonymouslyLogin, getUserInfo, resetPassword, updateUserInfo }

     return (
          <AuthContext.Provider value={Value} >
               {children}
          </AuthContext.Provider>
     )
}

export default AuthProvider;