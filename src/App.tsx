import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Olá mundo é o escambal!</div>,
  },
]);

function App() {return (<RouterProvider router={router} />)}

export default App
