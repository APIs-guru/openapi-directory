package shared

import (
	"time"
)

// StatementLine
// the lines details for a statement
type StatementLine struct {
	Amount               *float64                  `json:"amount,omitempty"`
	ChequeNumber         *string                   `json:"chequeNumber,omitempty"`
	CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator,omitempty"`
	Description          *string                   `json:"description,omitempty"`
	PayeeName            *string                   `json:"payeeName,omitempty"`
	PostedDate           *time.Time                `json:"postedDate,omitempty"`
	Reference            *string                   `json:"reference,omitempty"`
	TransactionID        *string                   `json:"transactionId,omitempty"`
}
