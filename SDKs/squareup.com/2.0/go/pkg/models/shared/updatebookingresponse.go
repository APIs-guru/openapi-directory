package shared

type UpdateBookingResponse struct {
	Booking *Booking `json:"booking"`
	Errors  []Error  `json:"errors"`
}
