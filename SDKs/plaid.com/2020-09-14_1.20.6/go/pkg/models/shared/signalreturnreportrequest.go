package shared

type SignalReturnReportRequest struct {
	ClientID            *string `json:"client_id"`
	ClientTransactionID string  `json:"client_transaction_id"`
	ReturnCode          string  `json:"return_code"`
	Secret              *string `json:"secret"`
}
