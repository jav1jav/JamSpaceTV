import * as firebase from 'firebase';
import db from '../firebase';
import React, { Fragment } from 'react';
import SignupForm from './signup-form';
import history from '../history';

const SignUp = () => {

  const handleSignup = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const displayName = event.target.displayName.value;
    const imageUrl = event.target.imageUrl.value;

    const emailRef = db.collection('jammers').doc(`${email}`)
    emailRef.get().then(user => {
      if (!user.exists) {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => firebase.auth().createUserWithEmailAndPassword(email, password))

          db.collection('jammers').doc(`${email}`).set({
            email,
            firstName,
            lastName,
            displayName,
            imageUrl
        })
      } else alert('That email already has an account with us')
    })
    history.push('/')
  }
  return (
    <Fragment>
      <h1>Welcome to Jamspace, baby!</h1>
      <SignupForm handleSubmit={handleSignup} />
    </Fragment>
  )
}

export default SignUp