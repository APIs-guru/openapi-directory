package shared

// StartBalance
// The starting balance of the statement
type StartBalance struct {
	Amount               *float64                  `json:"amount,omitempty"`
	CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator,omitempty"`
}
