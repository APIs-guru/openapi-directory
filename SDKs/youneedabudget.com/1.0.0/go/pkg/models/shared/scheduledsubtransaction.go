package shared

type ScheduledSubTransaction struct {
	Amount                 int64   `json:"amount"`
	CategoryID             *string `json:"category_id"`
	Deleted                bool    `json:"deleted"`
	ID                     string  `json:"id"`
	Memo                   *string `json:"memo"`
	PayeeID                *string `json:"payee_id"`
	ScheduledTransactionID string  `json:"scheduled_transaction_id"`
	TransferAccountID      *string `json:"transfer_account_id"`
}
