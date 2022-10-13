package shared

import (
	"time"
)

type StatementLine struct {
	Amount               *float64                  `json:"amount"`
	ChequeNumber         *string                   `json:"chequeNumber"`
	CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator"`
	Description          *string                   `json:"description"`
	PayeeName            *string                   `json:"payeeName"`
	PostedDate           *time.Time                `json:"postedDate"`
	Reference            *string                   `json:"reference"`
	TransactionID        *string                   `json:"transactionId"`
}
