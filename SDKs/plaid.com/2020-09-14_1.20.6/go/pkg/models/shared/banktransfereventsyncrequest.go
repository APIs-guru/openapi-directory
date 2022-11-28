package shared

// BankTransferEventSyncRequest
// BankTransferEventSyncRequest defines the request schema for `/bank_transfer/event/sync`
type BankTransferEventSyncRequest struct {
	AfterID  int64   `json:"after_id"`
	ClientID *string `json:"client_id,omitempty"`
	Count    *int64  `json:"count,omitempty"`
	Secret   *string `json:"secret,omitempty"`
}
