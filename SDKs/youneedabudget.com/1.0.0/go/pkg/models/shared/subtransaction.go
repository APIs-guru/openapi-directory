package shared

type SubTransaction struct {
	Amount                int64   `json:"amount"`
	CategoryID            *string `json:"category_id"`
	CategoryName          *string `json:"category_name"`
	Deleted               bool    `json:"deleted"`
	ID                    string  `json:"id"`
	Memo                  *string `json:"memo"`
	PayeeID               *string `json:"payee_id"`
	PayeeName             *string `json:"payee_name"`
	TransactionID         string  `json:"transaction_id"`
	TransferAccountID     *string `json:"transfer_account_id"`
	TransferTransactionID *string `json:"transfer_transaction_id"`
}
