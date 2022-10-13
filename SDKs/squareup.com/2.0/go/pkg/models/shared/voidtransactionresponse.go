package shared

type VoidTransactionResponse struct {
	Errors []Error `json:"errors"`
}
