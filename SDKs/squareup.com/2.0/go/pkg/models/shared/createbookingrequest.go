package shared



type CreateBookingRequest struct {
    Booking Booking `json:"booking"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    
}

