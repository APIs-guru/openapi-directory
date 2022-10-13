package shared

type CalculateLoyaltyPointsRequest struct {
	OrderID                *string `json:"order_id"`
	TransactionAmountMoney *Money  `json:"transaction_amount_money"`
}
