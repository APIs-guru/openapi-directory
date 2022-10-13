package shared

type ScheduledTransactionsResponseData struct {
	ScheduledTransactions []ScheduledTransactionDetail `json:"scheduled_transactions"`
	ServerKnowledge       int64                        `json:"server_knowledge"`
}

type ScheduledTransactionsResponse struct {
	Data ScheduledTransactionsResponseData `json:"data"`
}
