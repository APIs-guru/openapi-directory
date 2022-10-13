package shared

type Subscription struct {
	CanceledDate       *string  `json:"canceled_date"`
	CardID             *string  `json:"card_id"`
	ChargedThroughDate *string  `json:"charged_through_date"`
	CreatedAt          *string  `json:"created_at"`
	CustomerID         *string  `json:"customer_id"`
	ID                 *string  `json:"id"`
	InvoiceIds         []string `json:"invoice_ids"`
	LocationID         *string  `json:"location_id"`
	PlanID             *string  `json:"plan_id"`
	PriceOverrideMoney *Money   `json:"price_override_money"`
	StartDate          *string  `json:"start_date"`
	Status             *string  `json:"status"`
	TaxPercentage      *string  `json:"tax_percentage"`
	Timezone           *string  `json:"timezone"`
	Version            *int64   `json:"version"`
}
