import { City } from "./city.model"

export class Flight {
    id: number
    origin: City
    destination: City
    tickets: Flight[]
}