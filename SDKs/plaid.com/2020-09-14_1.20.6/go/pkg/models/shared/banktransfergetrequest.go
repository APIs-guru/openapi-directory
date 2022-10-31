package shared

type BankTransferGetRequest struct {
	BankTransferID string  `json:"bank_transfer_id"`
	ClientID       *string `json:"client_id,omitempty"`
	Secret         *string `json:"secret,omitempty"`
}
