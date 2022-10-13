package shared

type Itinerary struct {
	BaseFareUsd      *float64  `json:"baseFareUSD"`
	ID               *string   `json:"id"`
	Segments         []Segment `json:"segments"`
	TicketingCarrier *string   `json:"ticketingCarrier"`
}
