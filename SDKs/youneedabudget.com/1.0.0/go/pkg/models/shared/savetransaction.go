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
	Approved        *bool                         `json:"approved"`
	CategoryID      *string                       `json:"category_id"`
	Cleared         *SaveTransactionClearedEnum   `json:"cleared"`
	Date            time.Time                     `json:"date"`
	FlagColor       *SaveTransactionFlagColorEnum `json:"flag_color"`
	ImportID        *string                       `json:"import_id"`
	Memo            *string                       `json:"memo"`
	PayeeID         *string                       `json:"payee_id"`
	PayeeName       *string                       `json:"payee_name"`
	Subtransactions []SaveSubTransaction          `json:"subtransactions"`
}
