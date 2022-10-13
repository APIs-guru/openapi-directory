package shared

import (
	"time"
)

type UpdateTransactionClearedEnum string

const (
	UpdateTransactionClearedEnumCleared    UpdateTransactionClearedEnum = "cleared"
	UpdateTransactionClearedEnumUncleared  UpdateTransactionClearedEnum = "uncleared"
	UpdateTransactionClearedEnumReconciled UpdateTransactionClearedEnum = "reconciled"
)

type UpdateTransactionFlagColorEnum string

const (
	UpdateTransactionFlagColorEnumRed    UpdateTransactionFlagColorEnum = "red"
	UpdateTransactionFlagColorEnumOrange UpdateTransactionFlagColorEnum = "orange"
	UpdateTransactionFlagColorEnumYellow UpdateTransactionFlagColorEnum = "yellow"
	UpdateTransactionFlagColorEnumGreen  UpdateTransactionFlagColorEnum = "green"
	UpdateTransactionFlagColorEnumBlue   UpdateTransactionFlagColorEnum = "blue"
	UpdateTransactionFlagColorEnumPurple UpdateTransactionFlagColorEnum = "purple"
)

type UpdateTransaction struct {
	AccountID       string                          `json:"account_id"`
	Amount          int64                           `json:"amount"`
	Approved        *bool                           `json:"approved"`
	CategoryID      *string                         `json:"category_id"`
	Cleared         *UpdateTransactionClearedEnum   `json:"cleared"`
	Date            time.Time                       `json:"date"`
	FlagColor       *UpdateTransactionFlagColorEnum `json:"flag_color"`
	ID              string                          `json:"id"`
	ImportID        *string                         `json:"import_id"`
	Memo            *string                         `json:"memo"`
	PayeeID         *string                         `json:"payee_id"`
	PayeeName       *string                         `json:"payee_name"`
	Subtransactions []SaveSubTransaction            `json:"subtransactions"`
}
