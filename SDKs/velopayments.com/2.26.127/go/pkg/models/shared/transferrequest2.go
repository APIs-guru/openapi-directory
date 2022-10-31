package shared



type TransferRequest2 struct {
    Amount int64 `json:"amount"`
    Currency string `json:"currency"`
    ToSourceAccountID string `json:"toSourceAccountId"`
    
}

