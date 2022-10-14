package shared

type SaveTransactionsResponseData struct {
	DuplicateImportIds []string            `json:"duplicate_import_ids,omitempty"`
	ServerKnowledge    int64               `json:"server_knowledge"`
	Transaction        *TransactionDetail  `json:"transaction,omitempty"`
	TransactionIds     []string            `json:"transaction_ids"`
	Transactions       []TransactionDetail `json:"transactions,omitempty"`
}

type SaveTransactionsResponse struct {
	Data SaveTransactionsResponseData `json:"data"`
}
