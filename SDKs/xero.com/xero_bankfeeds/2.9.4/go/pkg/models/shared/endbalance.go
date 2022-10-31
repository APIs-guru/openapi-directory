package shared



type EndBalance struct {
    Amount *float64 `json:"amount,omitempty"`
    CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator,omitempty"`
    
}

