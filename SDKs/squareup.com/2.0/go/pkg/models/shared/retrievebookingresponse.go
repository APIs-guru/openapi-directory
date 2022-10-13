package shared

type RetrieveBookingResponse struct {
	Booking *Booking `json:"booking"`
	Errors  []Error  `json:"errors"`
}
