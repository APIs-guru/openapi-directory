package shared

import (
"time")


type HybridTransactionClearedEnum string

const (
    HybridTransactionClearedEnumCleared HybridTransactionClearedEnum = "cleared"
HybridTransactionClearedEnumUncleared HybridTransactionClearedEnum = "uncleared"
HybridTransactionClearedEnumReconciled HybridTransactionClearedEnum = "reconciled"
)



type HybridTransactionFlagColorEnum string

const (
    HybridTransactionFlagColorEnumRed HybridTransactionFlagColorEnum = "red"
HybridTransactionFlagColorEnumOrange HybridTransactionFlagColorEnum = "orange"
HybridTransactionFlagColorEnumYellow HybridTransactionFlagColorEnum = "yellow"
HybridTransactionFlagColorEnumGreen HybridTransactionFlagColorEnum = "green"
HybridTransactionFlagColorEnumBlue HybridTransactionFlagColorEnum = "blue"
HybridTransactionFlagColorEnumPurple HybridTransactionFlagColorEnum = "purple"
)



type HybridTransactionTypeEnum string

const (
    HybridTransactionTypeEnumTransaction HybridTransactionTypeEnum = "transaction"
HybridTransactionTypeEnumSubtransaction HybridTransactionTypeEnum = "subtransaction"
)


type HybridTransaction struct {
    AccountID string `json:"account_id"`
    AccountName string `json:"account_name"`
    Amount int64 `json:"amount"`
    Approved bool `json:"approved"`
    CategoryID *string `json:"category_id,omitempty"`
    CategoryName *string `json:"category_name,omitempty"`
    Cleared HybridTransactionClearedEnum `json:"cleared"`
    Date time.Time `json:"date"`
    Deleted bool `json:"deleted"`
    FlagColor *HybridTransactionFlagColorEnum `json:"flag_color,omitempty"`
    ID string `json:"id"`
    ImportID *string `json:"import_id,omitempty"`
    MatchedTransactionID *string `json:"matched_transaction_id,omitempty"`
    Memo *string `json:"memo,omitempty"`
    ParentTransactionID *string `json:"parent_transaction_id,omitempty"`
    PayeeID *string `json:"payee_id,omitempty"`
    PayeeName *string `json:"payee_name,omitempty"`
    TransferAccountID *string `json:"transfer_account_id,omitempty"`
    TransferTransactionID *string `json:"transfer_transaction_id,omitempty"`
    Type HybridTransactionTypeEnum `json:"type"`
    
}

