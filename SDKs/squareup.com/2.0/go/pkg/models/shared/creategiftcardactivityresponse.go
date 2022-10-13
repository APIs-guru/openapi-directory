package shared

type CreateGiftCardActivityResponse struct {
	Errors           []Error           `json:"errors"`
	GiftCardActivity *GiftCardActivity `json:"gift_card_activity"`
}
