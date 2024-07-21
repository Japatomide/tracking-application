import ReactDOM from 'react-dom/client'
import FormDisplay from '../src/pages/FormDisplay.jsx'
import ProductDisplay from '../src/pages/ProductDisplay.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormDisplay />,
  },
  {
    path: "track",
    element: <ProductDisplay />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);