package shared

// GetTransactionResponse
// Successful response to get a single transaction.
type GetTransactionResponse struct {
	Data TransactionResource `json:"data"`
}
