package shared



type RetrieveBookingResponse struct {
    Booking *Booking `json:"booking,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

