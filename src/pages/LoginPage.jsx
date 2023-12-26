import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db, storage } from '../firebase';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';

export const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(true);
    }
  };

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const response = await signInWithPopup(auth, provider);
    console.log('response :>> ', response);
    const displayName = response.user.displayName;
    const email = response.user.email;
    const storageRef = ref(storage, response.user.displayName);
    const uploadTask = uploadBytesResumable(storageRef, response.user.photoURL);

    uploadTask.on(
      error => {
        setError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          await updateProfile(response.user, {
            displayName,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, 'users', response.user.uid), {
            uid: response.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });
          await setDoc(doc(db, 'userChats', response.user.uid), {});
          navigate('/');
        });
      }
    );
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Fire chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <button onClick={handleGoogle}>Sign in with Google</button>
        <p>
          You don't have an account? <Link to="/register">Register</Link>{' '}
        </p>
      </div>
    </div>
  );
};
