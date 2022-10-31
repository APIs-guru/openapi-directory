package shared



type Itinerary struct {
    BaseFareUsd *float64 `json:"baseFareUSD,omitempty"`
    ID *string `json:"id,omitempty"`
    Segments []Segment `json:"segments"`
    TicketingCarrier *string `json:"ticketingCarrier,omitempty"`
    
}

