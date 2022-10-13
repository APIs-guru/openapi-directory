package shared

type CreateSubscriptionRequest struct {
	CanceledDate       *string `json:"canceled_date"`
	CardID             *string `json:"card_id"`
	CustomerID         string  `json:"customer_id"`
	IdempotencyKey     *string `json:"idempotency_key"`
	LocationID         string  `json:"location_id"`
	PlanID             string  `json:"plan_id"`
	PriceOverrideMoney *Money  `json:"price_override_money"`
	StartDate          *string `json:"start_date"`
	TaxPercentage      *string `json:"tax_percentage"`
	Timezone           *string `json:"timezone"`
}
