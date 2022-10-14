package shared

type SignalDecisionReportRequest struct {
	ClientID            *string `json:"client_id,omitempty"`
	ClientTransactionID string  `json:"client_transaction_id"`
	Initiated           bool    `json:"initiated"`
	Secret              *string `json:"secret,omitempty"`
}
