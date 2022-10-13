package shared

type RefundDetails struct {
	CurrencyCode     *string  `json:"currencyCode"`
	ItemPrice        *float64 `json:"itemPrice"`
	RefundAmount     *float64 `json:"refundAmount"`
	RefundPercentage *float64 `json:"refundPercentage"`
}
