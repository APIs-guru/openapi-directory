package shared

type SubscriptionPhase struct {
	Cadence             string  `json:"cadence"`
	Ordinal             *int64  `json:"ordinal,omitempty"`
	Periods             *int64  `json:"periods,omitempty"`
	RecurringPriceMoney Money   `json:"recurring_price_money"`
	UID                 *string `json:"uid,omitempty"`
}
