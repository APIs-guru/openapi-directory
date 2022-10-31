package shared

import (
"time")


type TransactionDetailClearedEnum string

const (
    TransactionDetailClearedEnumCleared TransactionDetailClearedEnum = "cleared"
TransactionDetailClearedEnumUncleared TransactionDetailClearedEnum = "uncleared"
TransactionDetailClearedEnumReconciled TransactionDetailClearedEnum = "reconciled"
)



type TransactionDetailFlagColorEnum string

const (
    TransactionDetailFlagColorEnumRed TransactionDetailFlagColorEnum = "red"
TransactionDetailFlagColorEnumOrange TransactionDetailFlagColorEnum = "orange"
TransactionDetailFlagColorEnumYellow TransactionDetailFlagColorEnum = "yellow"
TransactionDetailFlagColorEnumGreen TransactionDetailFlagColorEnum = "green"
TransactionDetailFlagColorEnumBlue TransactionDetailFlagColorEnum = "blue"
TransactionDetailFlagColorEnumPurple TransactionDetailFlagColorEnum = "purple"
)


type TransactionDetail struct {
    AccountID string `json:"account_id"`
    AccountName string `json:"account_name"`
    Amount int64 `json:"amount"`
    Approved bool `json:"approved"`
    CategoryID *string `json:"category_id,omitempty"`
    CategoryName *string `json:"category_name,omitempty"`
    Cleared TransactionDetailClearedEnum `json:"cleared"`
    Date time.Time `json:"date"`
    Deleted bool `json:"deleted"`
    FlagColor *TransactionDetailFlagColorEnum `json:"flag_color,omitempty"`
    ID string `json:"id"`
    ImportID *string `json:"import_id,omitempty"`
    MatchedTransactionID *string `json:"matched_transaction_id,omitempty"`
    Memo *string `json:"memo,omitempty"`
    PayeeID *string `json:"payee_id,omitempty"`
    PayeeName *string `json:"payee_name,omitempty"`
    Subtransactions []SubTransaction `json:"subtransactions"`
    TransferAccountID *string `json:"transfer_account_id,omitempty"`
    TransferTransactionID *string `json:"transfer_transaction_id,omitempty"`
    
}

