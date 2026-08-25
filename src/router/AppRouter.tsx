import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from "../modules/shared/pages/HomePage";
import { ProfesoresPage } from "../modules/profesores/pages/ProfesoresPage";
import { MateriasPage } from "../modules/materias/pages/MateriasPage";
import { ProfesoresCreatePage } from "@/modules/profesores/pages/ProfesoresCreatePage";
import { MateriasCreatePage } from "@/modules/materias/pages/MateriasCreatePage";


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
    path: "/profesores/create",
    element: <ProfesoresCreatePage />,
  },

  {
    path: "/materias",
    element: <MateriasPage />,
  },

  {
    path: "/materias/create",
    element: <MateriasCreatePage />,
  },
];


const router = createBrowserRouter(routes);

export const AppRouter = () => 
  <RouterProvider router={router} />