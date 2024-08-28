import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./assets/pages/login/login";
import Register from "./assets/pages/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
