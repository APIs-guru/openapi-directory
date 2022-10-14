package shared

type CalculateLoyaltyPointsRequest struct {
	OrderID                *string `json:"order_id,omitempty"`
	TransactionAmountMoney *Money  `json:"transaction_amount_money,omitempty"`
}
