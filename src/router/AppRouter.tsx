import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../modules/shared/pages/HomePage";
import { ProfesoresPage } from "../modules/profesores/pages/ProfesoresPage";
import { MateriasPage } from "../modules/materias/pages/MateriasPage";


const routes = [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "/profesores",
    element: <ProfesoresPage />,
  },

  {
    path: "/materias",
    element: <MateriasPage />,
  },
];


const router = createBrowserRouter(routes);

export const AppRouter = () => 
  <RouterProvider router={router} />