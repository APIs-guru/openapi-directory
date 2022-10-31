package shared



type StartBalance struct {
    Amount *float64 `json:"amount,omitempty"`
    CreditDebitIndicator *CreditDebitIndicatorEnum `json:"creditDebitIndicator,omitempty"`
    
}

