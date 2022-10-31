package shared



type CreateSubscriptionRequest struct {
    CanceledDate *string `json:"canceled_date,omitempty"`
    CardID *string `json:"card_id,omitempty"`
    CustomerID string `json:"customer_id"`
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    LocationID string `json:"location_id"`
    PlanID string `json:"plan_id"`
    PriceOverrideMoney *Money `json:"price_override_money,omitempty"`
    StartDate *string `json:"start_date,omitempty"`
    TaxPercentage *string `json:"tax_percentage,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    
}

