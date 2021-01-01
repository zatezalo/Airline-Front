import { Flight } from "./flight.model"
import { Ticket } from "./ticket.model"
import { User } from "./user.model"

export class Booking {
    id: number
    isAvailable: boolean
    flight: Flight
    user: User
    ticket: Ticket
    bookingCount: number
}