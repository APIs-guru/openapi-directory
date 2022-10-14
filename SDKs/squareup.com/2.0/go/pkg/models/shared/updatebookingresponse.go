package shared

type UpdateBookingResponse struct {
	Booking *Booking `json:"booking,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
