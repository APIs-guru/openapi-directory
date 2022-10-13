package shared

type BankTransferCancelRequest struct {
	BankTransferID string  `json:"bank_transfer_id"`
	ClientID       *string `json:"client_id"`
	Secret         *string `json:"secret"`
}
