package shared

type HybridTransactionsResponseData struct {
	Transactions []HybridTransaction `json:"transactions"`
}

type HybridTransactionsResponse struct {
	Data HybridTransactionsResponseData `json:"data"`
}
