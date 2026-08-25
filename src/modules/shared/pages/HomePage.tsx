import { Link } from "react-router"
import { Alert, AlertDescription, AlertTitle } from "../libraries/shadcn/components/ui/alert"


const menu = [
  {
    emoji:"🗂️",
    title: "Materias",
    url: "/materias",
    description: "Lista, crear y editar materias"
  },

  {
    emoji:"👨‍🏫",
    title: "Profesores",
    url: "/profesores",
    description: "Lista, crear y editar profesores"
  },

  {
    emoji:"🗓️",
    title: "Cursos",
    url: "/cursos",
    description: "Lista, crear y editar cursos"
  }


]

export const HomePage = () => {
  return (
    <div className="mt-6 mx-auto max-w-3xl flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Menu</h1>
      {
        menu.map( i => (
          <Link to={ i.url } className="w-full mx-auto max-w-md">
            <Alert key={ i.title } className="my-2 transition-colors duration-200 bg-cyan-800/20 hover:bg-cyan-800/80">
              <AlertTitle className="text-xl">{i.emoji} { i.title }</AlertTitle>
              <AlertDescription>{ i.description }</AlertDescription>
            </Alert>
          </Link>
        ) )
      }
    </div>
  )
}
