package shared

type RetrieveGiftCardResponse struct {
	Errors   []Error   `json:"errors"`
	GiftCard *GiftCard `json:"gift_card"`
}
