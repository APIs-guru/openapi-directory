package shared

type CancelBookingResponse struct {
	Booking *Booking `json:"booking,omitempty"`
	Errors  []Error  `json:"errors,omitempty"`
}
