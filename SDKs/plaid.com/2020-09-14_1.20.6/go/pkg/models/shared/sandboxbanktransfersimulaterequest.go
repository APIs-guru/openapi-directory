package shared

type SandboxBankTransferSimulateRequest struct {
	BankTransferID string                 `json:"bank_transfer_id"`
	ClientID       *string                `json:"client_id"`
	EventType      string                 `json:"event_type"`
	FailureReason  map[string]interface{} `json:"failure_reason"`
	Secret         *string                `json:"secret"`
}
