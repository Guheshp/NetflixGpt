import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Browse from './components/Browse';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import AppStore from './utils/AppStore';
import Body from './components/Body';
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from './utils/userSlice';
import { auth } from './utils/Firebase.config';

function AppLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
  }, [dispatch]);

  return (
    <Outlet />
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse />
      },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={AppStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
