package shared

type CancelBookingResponse struct {
	Booking *Booking `json:"booking"`
	Errors  []Error  `json:"errors"`
}
