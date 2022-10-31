package shared



type TransferRequest struct {
    Amount int64 `json:"amount"`
    Currency string `json:"currency"`
    ToSourceAccountID string `json:"toSourceAccountId"`
    
}

