package shared

import (
"time")


type UpdateTransactionClearedEnum string

const (
    UpdateTransactionClearedEnumCleared UpdateTransactionClearedEnum = "cleared"
UpdateTransactionClearedEnumUncleared UpdateTransactionClearedEnum = "uncleared"
UpdateTransactionClearedEnumReconciled UpdateTransactionClearedEnum = "reconciled"
)



type UpdateTransactionFlagColorEnum string

const (
    UpdateTransactionFlagColorEnumRed UpdateTransactionFlagColorEnum = "red"
UpdateTransactionFlagColorEnumOrange UpdateTransactionFlagColorEnum = "orange"
UpdateTransactionFlagColorEnumYellow UpdateTransactionFlagColorEnum = "yellow"
UpdateTransactionFlagColorEnumGreen UpdateTransactionFlagColorEnum = "green"
UpdateTransactionFlagColorEnumBlue UpdateTransactionFlagColorEnum = "blue"
UpdateTransactionFlagColorEnumPurple UpdateTransactionFlagColorEnum = "purple"
)


type UpdateTransaction struct {
    AccountID string `json:"account_id"`
    Amount int64 `json:"amount"`
    Approved *bool `json:"approved,omitempty"`
    CategoryID *string `json:"category_id,omitempty"`
    Cleared *UpdateTransactionClearedEnum `json:"cleared,omitempty"`
    Date time.Time `json:"date"`
    FlagColor *UpdateTransactionFlagColorEnum `json:"flag_color,omitempty"`
    ID string `json:"id"`
    ImportID *string `json:"import_id,omitempty"`
    Memo *string `json:"memo,omitempty"`
    PayeeID *string `json:"payee_id,omitempty"`
    PayeeName *string `json:"payee_name,omitempty"`
    Subtransactions []SaveSubTransaction `json:"subtransactions,omitempty"`
    
}

