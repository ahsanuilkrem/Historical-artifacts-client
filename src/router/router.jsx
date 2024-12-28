import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import SignUp from "../authlayot/SignUp";
import Signin from "../authlayot/Signin";
import Home from "../pages/Home";
import AddArtifacts from "../pages/AddArtifacts";
import ArtifactDetails from "../pages/ArtifactDetails";
import AllArtifacts from "../pages/AllArtifacts";
import PrivateRoute from "./PrivateRoute";
import MyArifacts from "../pages/MyArifacts";
import UpdateArtifacts from "../pages/UpdateArtifacts";
import MyLiked from "../pages/MyLiked";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <h2>this is error</h2>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            // loader: () => fetch('http://localhost:5000/artifacts')
        },
        {
          path: 'addArtifacts',
          element: <PrivateRoute>
            <AddArtifacts></AddArtifacts>
          </PrivateRoute>,
        },
        {
          path: '/artifactDetails/:id',
          element: <PrivateRoute>
            <ArtifactDetails></ArtifactDetails>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/artifacts/${params.id}`)
        },
        {
          path: 'allArtifats',
          element: <PrivateRoute>
            <AllArtifacts></AllArtifacts>
          </PrivateRoute>,
        
        },
        {
          path: 'myArtifacts',
          element: <PrivateRoute>
            <MyArifacts></MyArifacts>
          </PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute>
            <UpdateArtifacts></UpdateArtifacts>
          </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/artifacts/${params.id}`)
        },
        {
          path: 'liked',
          element: <PrivateRoute>
            <MyLiked></MyLiked>
          </PrivateRoute>
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