package shared

type CreateGiftCardResponse struct {
	Errors   []Error   `json:"errors"`
	GiftCard *GiftCard `json:"gift_card"`
}
