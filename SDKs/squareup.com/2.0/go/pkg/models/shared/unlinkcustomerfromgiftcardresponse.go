package shared

type UnlinkCustomerFromGiftCardResponse struct {
	Errors   []Error   `json:"errors"`
	GiftCard *GiftCard `json:"gift_card"`
}
