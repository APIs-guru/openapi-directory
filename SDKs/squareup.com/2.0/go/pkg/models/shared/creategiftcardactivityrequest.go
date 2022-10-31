package shared

type CreateGiftCardActivityRequest struct {
	GiftCardActivity GiftCardActivity `json:"gift_card_activity"`
	IdempotencyKey   string           `json:"idempotency_key"`
}
