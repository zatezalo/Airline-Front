import { Company } from "./company.model"
import { Flight } from "./flight.model"

export class Ticket {
  id: number
  company: Company
  oneWay: boolean
  depart: Date
  comeBack: Date
  flight: Flight
  availableCount: number
}