import { Button } from "@shadcn/components/ui/button"
import { Card, CardContent } from "@shadcn/components/ui/card"
import { Input } from "@shadcn/components/ui/input"
import { Label } from "@shadcn/components/ui/label"
import { useNavigate } from "react-router";
import { useProfesores } from "../hooks/use-profesores";
import { useState } from "react";


const initForm = {
  firstName : "",
  lastName  : "",
  degree    : ""
}

export const ProfesoresCreatePage = () => {

  const { createProfesorMutation } = useProfesores();
  const navigate = useNavigate();

  const isValidForm = () => {
    return form.firstName.length > 0 
      && form.lastName.length > 0 
      && form.degree.length > 0;
  }

  const onSaveProfesor = () => {
    createProfesorMutation.mutate(form);
    setForm(initForm);
    navigate("/profesores");
  }


  const [form, setForm] = useState(initForm);

  return (
    <div className="mt-6">
      <Card className="max-w-sm mx-auto">
        
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <h1 className="text-3xl text-center">Crear Profesor</h1>
              <div className="grid gap-2">
                <Label>Nombres</Label>
                <Input
                  onChange={ (e) => setForm({...form, firstName: e.target.value}) }
                  value={ form.firstName }
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Apellidos</Label>
                <Input 
                  type="text" 
                  required 
                  onChange={ (e) => setForm({...form, lastName: e.target.value}) }
                  value={ form.lastName }
                />
              </div>

              <div className="grid gap-2">
                <Label>titulo</Label>
                <Input 
                  type="text" 
                  required 
                  onChange={ (e) => setForm({...form, degree: e.target.value}) }
                  value={ form.degree }
                />
              </div>
            </div>
          </form>

          <div className="grid grid-cols-2 gap-4 mt-8">

            <Button 
              variant="outline"
              onClick={ () => navigate("/profesores") }
            >
              Cancelar
            </Button>

            <Button 
              onClick={ onSaveProfesor }
              type="submit"
              disabled={ !isValidForm() }
            >
              Guardar
            </Button>

          </div>

        </CardContent>
      </Card>
    </div>
  )
}
