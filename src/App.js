import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Details from "./components/Details";
import { useState } from "react";

const PrivateRoute = ({ path, element: Element }) => {
  const [authenticated, setAuthenticated] = useState(false);


  if(!authenticated){
    <Login/>
  }


  // Render the private route content if user is authenticated
  return <Element />;
};

const router = createBrowserRouter([
  {
    path :'/',
    element : <Login/>
  },
  {
    path :'/main',
    element : <PrivateRoute path="/main" element={Main} />
  },
  {
    path :'/details/:id',
    element : <PrivateRoute path="/details/:id" element={Details} />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
