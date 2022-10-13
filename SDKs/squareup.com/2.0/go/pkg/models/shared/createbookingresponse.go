package shared

type CreateBookingResponse struct {
	Booking *Booking `json:"booking"`
	Errors  []Error  `json:"errors"`
}
