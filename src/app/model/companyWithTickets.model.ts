import { Ticket } from "./ticket.model"

export class CompanyWithTickets {
    id: number
    name: string
    tickets: Ticket[]
}