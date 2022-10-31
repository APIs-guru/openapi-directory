package shared



type CreateGiftCardRequest struct {
    GiftCard GiftCard `json:"gift_card"`
    IdempotencyKey string `json:"idempotency_key"`
    LocationID string `json:"location_id"`
    
}

