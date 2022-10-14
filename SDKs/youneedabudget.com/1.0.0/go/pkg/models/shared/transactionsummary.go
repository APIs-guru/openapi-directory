package shared

import (
	"time"
)

type TransactionSummaryClearedEnum string

const (
	TransactionSummaryClearedEnumCleared    TransactionSummaryClearedEnum = "cleared"
	TransactionSummaryClearedEnumUncleared  TransactionSummaryClearedEnum = "uncleared"
	TransactionSummaryClearedEnumReconciled TransactionSummaryClearedEnum = "reconciled"
)

type TransactionSummaryFlagColorEnum string

const (
	TransactionSummaryFlagColorEnumRed    TransactionSummaryFlagColorEnum = "red"
	TransactionSummaryFlagColorEnumOrange TransactionSummaryFlagColorEnum = "orange"
	TransactionSummaryFlagColorEnumYellow TransactionSummaryFlagColorEnum = "yellow"
	TransactionSummaryFlagColorEnumGreen  TransactionSummaryFlagColorEnum = "green"
	TransactionSummaryFlagColorEnumBlue   TransactionSummaryFlagColorEnum = "blue"
	TransactionSummaryFlagColorEnumPurple TransactionSummaryFlagColorEnum = "purple"
)

type TransactionSummary struct {
	AccountID             string                           `json:"account_id"`
	Amount                int64                            `json:"amount"`
	Approved              bool                             `json:"approved"`
	CategoryID            *string                          `json:"category_id,omitempty"`
	Cleared               TransactionSummaryClearedEnum    `json:"cleared"`
	Date                  time.Time                        `json:"date"`
	Deleted               bool                             `json:"deleted"`
	FlagColor             *TransactionSummaryFlagColorEnum `json:"flag_color,omitempty"`
	ID                    string                           `json:"id"`
	ImportID              *string                          `json:"import_id,omitempty"`
	MatchedTransactionID  *string                          `json:"matched_transaction_id,omitempty"`
	Memo                  *string                          `json:"memo,omitempty"`
	PayeeID               *string                          `json:"payee_id,omitempty"`
	TransferAccountID     *string                          `json:"transfer_account_id,omitempty"`
	TransferTransactionID *string                          `json:"transfer_transaction_id,omitempty"`
}
