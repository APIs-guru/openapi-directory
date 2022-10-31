package shared

type TransactionsImportResponseData struct {
	TransactionIds []string `json:"transaction_ids"`
}

type TransactionsImportResponse struct {
	Data TransactionsImportResponseData `json:"data"`
}
