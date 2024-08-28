import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import Login from "./assets/pages/login/login";
import Register from "./assets/pages/register/register";
import PrivateRoute from "./PrivateRouter";
import { AuthProvider } from "./AuthContext";
import { Home } from "./assets/pages/Authenticated/Home/Home";

// Define as rotas com proteção condicional
const createRoutes = (): RouteObject[] => [
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
  {
    path: "/home",
    element: <PrivateRoute element={<Home />} />,
  },
  // {
  //   path: '/profile',
  //   element: (
  //     <PrivateRoute element={<Profile />} />
  //   ),
  // },
];

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

const AppRoutes: React.FC = () => {
  const routes = createRoutes();
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
