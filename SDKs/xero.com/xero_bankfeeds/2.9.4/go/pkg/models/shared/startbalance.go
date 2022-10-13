package shared

type StartBalance struct {
	Amount               *float64                  `json:"amount"`
	CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator"`
}
