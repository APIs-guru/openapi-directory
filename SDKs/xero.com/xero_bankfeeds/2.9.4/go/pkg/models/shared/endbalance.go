package shared

type EndBalance struct {
	Amount               *float64                  `json:"amount"`
	CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator"`
}
