package shared

// SandboxBankTransferSimulateRequest
// SandboxBankTransferSimulateRequest defines the request schema for `/sandbox/bank_transfer/simulate`
type SandboxBankTransferSimulateRequest struct {
	BankTransferID string                 `json:"bank_transfer_id"`
	ClientID       *string                `json:"client_id,omitempty"`
	EventType      string                 `json:"event_type"`
	FailureReason  map[string]interface{} `json:"failure_reason,omitempty"`
	Secret         *string                `json:"secret,omitempty"`
}
