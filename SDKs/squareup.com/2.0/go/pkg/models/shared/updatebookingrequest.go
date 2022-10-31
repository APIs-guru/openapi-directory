package shared



type UpdateBookingRequest struct {
    Booking Booking `json:"booking"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    
}

