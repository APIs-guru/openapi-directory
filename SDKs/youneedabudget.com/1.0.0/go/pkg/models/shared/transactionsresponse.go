package shared

type TransactionsResponseData struct {
	ServerKnowledge int64               `json:"server_knowledge"`
	Transactions    []TransactionDetail `json:"transactions"`
}

type TransactionsResponse struct {
	Data TransactionsResponseData `json:"data"`
}
