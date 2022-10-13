package shared

import (
	"time"
)

type HybridTransactionClearedEnum string

const (
	HybridTransactionClearedEnumCleared    HybridTransactionClearedEnum = "cleared"
	HybridTransactionClearedEnumUncleared  HybridTransactionClearedEnum = "uncleared"
	HybridTransactionClearedEnumReconciled HybridTransactionClearedEnum = "reconciled"
)

type HybridTransactionFlagColorEnum string

const (
	HybridTransactionFlagColorEnumRed    HybridTransactionFlagColorEnum = "red"
	HybridTransactionFlagColorEnumOrange HybridTransactionFlagColorEnum = "orange"
	HybridTransactionFlagColorEnumYellow HybridTransactionFlagColorEnum = "yellow"
	HybridTransactionFlagColorEnumGreen  HybridTransactionFlagColorEnum = "green"
	HybridTransactionFlagColorEnumBlue   HybridTransactionFlagColorEnum = "blue"
	HybridTransactionFlagColorEnumPurple HybridTransactionFlagColorEnum = "purple"
)

type HybridTransactionTypeEnum string

const (
	HybridTransactionTypeEnumTransaction    HybridTransactionTypeEnum = "transaction"
	HybridTransactionTypeEnumSubtransaction HybridTransactionTypeEnum = "subtransaction"
)

type HybridTransaction struct {
	AccountID             string                          `json:"account_id"`
	AccountName           string                          `json:"account_name"`
	Amount                int64                           `json:"amount"`
	Approved              bool                            `json:"approved"`
	CategoryID            *string                         `json:"category_id"`
	CategoryName          *string                         `json:"category_name"`
	Cleared               HybridTransactionClearedEnum    `json:"cleared"`
	Date                  time.Time                       `json:"date"`
	Deleted               bool                            `json:"deleted"`
	FlagColor             *HybridTransactionFlagColorEnum `json:"flag_color"`
	ID                    string                          `json:"id"`
	ImportID              *string                         `json:"import_id"`
	MatchedTransactionID  *string                         `json:"matched_transaction_id"`
	Memo                  *string                         `json:"memo"`
	ParentTransactionID   *string                         `json:"parent_transaction_id"`
	PayeeID               *string                         `json:"payee_id"`
	PayeeName             *string                         `json:"payee_name"`
	TransferAccountID     *string                         `json:"transfer_account_id"`
	TransferTransactionID *string                         `json:"transfer_transaction_id"`
	Type                  HybridTransactionTypeEnum       `json:"type"`
}
