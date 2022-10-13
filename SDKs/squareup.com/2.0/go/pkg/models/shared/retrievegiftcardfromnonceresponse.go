package shared

type RetrieveGiftCardFromNonceResponse struct {
	Errors   []Error   `json:"errors"`
	GiftCard *GiftCard `json:"gift_card"`
}
