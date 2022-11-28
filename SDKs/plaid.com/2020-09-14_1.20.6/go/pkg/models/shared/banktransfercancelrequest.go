package shared

// BankTransferCancelRequest
// BankTransferCancelRequest defines the request schema for `/bank_transfer/cancel`
type BankTransferCancelRequest struct {
	BankTransferID string  `json:"bank_transfer_id"`
	ClientID       *string `json:"client_id,omitempty"`
	Secret         *string `json:"secret,omitempty"`
}
