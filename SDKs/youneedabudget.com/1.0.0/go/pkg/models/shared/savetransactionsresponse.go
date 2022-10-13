package shared

type SaveTransactionsResponseData struct {
	DuplicateImportIds []string            `json:"duplicate_import_ids"`
	ServerKnowledge    int64               `json:"server_knowledge"`
	Transaction        *TransactionDetail  `json:"transaction"`
	TransactionIds     []string            `json:"transaction_ids"`
	Transactions       []TransactionDetail `json:"transactions"`
}

type SaveTransactionsResponse struct {
	Data SaveTransactionsResponseData `json:"data"`
}
