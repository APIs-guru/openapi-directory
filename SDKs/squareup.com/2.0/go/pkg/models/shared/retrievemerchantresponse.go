package shared

type RetrieveMerchantResponse struct {
	Errors   []Error   `json:"errors"`
	Merchant *Merchant `json:"merchant"`
}
