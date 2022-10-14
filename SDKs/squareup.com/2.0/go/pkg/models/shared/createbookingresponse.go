package shared

type CreateBookingResponse struct {
	Booking *Booking `json:"booking,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
