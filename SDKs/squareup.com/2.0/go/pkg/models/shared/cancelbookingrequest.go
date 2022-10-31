package shared



type CancelBookingRequest struct {
    BookingVersion *int64 `json:"booking_version,omitempty"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    
}

