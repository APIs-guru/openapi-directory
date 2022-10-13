package shared

type CancelBookingRequest struct {
	BookingVersion *int64  `json:"booking_version"`
	IdempotencyKey *string `json:"idempotency_key"`
}
