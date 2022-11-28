package shared

// EndBalance
// The StartBalance plus all the Statement Line Amounts should be equal to the EndBalance Amount.
type EndBalance struct {
	Amount               *float64                  `json:"amount,omitempty"`
	CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator,omitempty"`
}
