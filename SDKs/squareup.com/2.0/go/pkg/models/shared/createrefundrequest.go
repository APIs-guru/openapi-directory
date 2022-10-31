package shared



type CreateRefundRequest struct {
    AmountMoney Money `json:"amount_money"`
    IdempotencyKey string `json:"idempotency_key"`
    Reason *string `json:"reason,omitempty"`
    TenderID string `json:"tender_id"`
    
}

