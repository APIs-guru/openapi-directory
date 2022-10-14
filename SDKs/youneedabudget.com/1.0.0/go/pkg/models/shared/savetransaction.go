package shared

import (
	"time"
)

type SaveTransactionClearedEnum string

const (
	SaveTransactionClearedEnumCleared    SaveTransactionClearedEnum = "cleared"
	SaveTransactionClearedEnumUncleared  SaveTransactionClearedEnum = "uncleared"
	SaveTransactionClearedEnumReconciled SaveTransactionClearedEnum = "reconciled"
)

type SaveTransactionFlagColorEnum string

const (
	SaveTransactionFlagColorEnumRed    SaveTransactionFlagColorEnum = "red"
	SaveTransactionFlagColorEnumOrange SaveTransactionFlagColorEnum = "orange"
	SaveTransactionFlagColorEnumYellow SaveTransactionFlagColorEnum = "yellow"
	SaveTransactionFlagColorEnumGreen  SaveTransactionFlagColorEnum = "green"
	SaveTransactionFlagColorEnumBlue   SaveTransactionFlagColorEnum = "blue"
	SaveTransactionFlagColorEnumPurple SaveTransactionFlagColorEnum = "purple"
)

type SaveTransaction struct {
	AccountID       string                        `json:"account_id"`
	Amount          int64                         `json:"amount"`
	Approved        *bool                         `json:"approved,omitempty"`
	CategoryID      *string                       `json:"category_id,omitempty"`
	Cleared         *SaveTransactionClearedEnum   `json:"cleared,omitempty"`
	Date            time.Time                     `json:"date"`
	FlagColor       *SaveTransactionFlagColorEnum `json:"flag_color,omitempty"`
	ImportID        *string                       `json:"import_id,omitempty"`
	Memo            *string                       `json:"memo,omitempty"`
	PayeeID         *string                       `json:"payee_id,omitempty"`
	PayeeName       *string                       `json:"payee_name,omitempty"`
	Subtransactions []SaveSubTransaction          `json:"subtransactions,omitempty"`
}
