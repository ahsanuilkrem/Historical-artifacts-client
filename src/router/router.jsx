import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import SignUp from "../authlayot/SignUp";
import Signin from "../authlayot/Signin";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
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