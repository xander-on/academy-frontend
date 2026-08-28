import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@shadcn/components/ui/button"
import { Calendar } from "@shadcn/components/ui/calendar"
import { Input } from "@shadcn/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@shadcn/components/ui/popover"
import { Label } from "../libraries/shadcn/components/ui/label"
import { useState } from "react"

export const CustomDatePickerTime = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div className="grid grid-cols-2 gap-4">

      <div className="grid gap-2">
        <Label htmlFor="date-picker-optional">Fecha</Label>
        <Popover 
          open={open} 
          onOpenChange={setOpen}
        >
          <PopoverTrigger render={
            <Button 
              variant="outline" 
              id="date-picker-optional" 
              className="justify-between w-full font-normal"
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon data-icon="inline-end" />
            </Button>
          }/>

          <PopoverContent 
            className="w-auto overflow-hidden p-0" 
            align="start"
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date) => {
                setDate(date)
                setOpen(false)
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="time-picker-optional">Hora</Label>
        <Input
          type="time"
          id="time-picker-optional"
          step="1"
          defaultValue="00:00"
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />

        <input id="appointment-time" type="time" name="appointment-time" />
      </div>
    </div>
  )
}
