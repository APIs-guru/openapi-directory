package shared

type RetrieveMerchantResponse struct {
	Errors   []Error   `json:"errors,omitempty"`
	Merchant *Merchant `json:"merchant,omitempty"`
}
