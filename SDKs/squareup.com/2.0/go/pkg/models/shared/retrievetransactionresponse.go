package shared

type RetrieveTransactionResponse struct {
	Errors      []Error      `json:"errors"`
	Transaction *Transaction `json:"transaction"`
}
