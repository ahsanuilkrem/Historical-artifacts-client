import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import SignUp from "../authlayot/SignUp";
import Signin from "../authlayot/Signin";
import Home from "../pages/Home";
import AddArtifacts from "../pages/AddArtifacts";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <h2>this is error</h2>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/artifacts'),
        },
        {
          path: 'addArtifacts',
          element: <AddArtifacts></AddArtifacts>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'signin',
            element: <Signin></Signin>
        }
      ]
    },
  ]);

  export default router;