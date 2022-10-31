package shared

type SubTransaction struct {
	Amount                int64   `json:"amount"`
	CategoryID            *string `json:"category_id,omitempty"`
	CategoryName          *string `json:"category_name,omitempty"`
	Deleted               bool    `json:"deleted"`
	ID                    string  `json:"id"`
	Memo                  *string `json:"memo,omitempty"`
	PayeeID               *string `json:"payee_id,omitempty"`
	PayeeName             *string `json:"payee_name,omitempty"`
	TransactionID         string  `json:"transaction_id"`
	TransferAccountID     *string `json:"transfer_account_id,omitempty"`
	TransferTransactionID *string `json:"transfer_transaction_id,omitempty"`
}
