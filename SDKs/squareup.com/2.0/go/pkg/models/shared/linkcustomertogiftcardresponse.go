package shared

type LinkCustomerToGiftCardResponse struct {
	Errors   []Error   `json:"errors"`
	GiftCard *GiftCard `json:"gift_card"`
}
