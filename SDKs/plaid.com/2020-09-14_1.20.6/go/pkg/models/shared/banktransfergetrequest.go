package shared

// BankTransferGetRequest
// BankTransferGetRequest defines the request schema for `/bank_transfer/get`
type BankTransferGetRequest struct {
	BankTransferID string  `json:"bank_transfer_id"`
	ClientID       *string `json:"client_id,omitempty"`
	Secret         *string `json:"secret,omitempty"`
}
