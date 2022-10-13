package shared

type SearchSubscriptionsFilter struct {
	CustomerIds []string `json:"customer_ids"`
	LocationIds []string `json:"location_ids"`
}
