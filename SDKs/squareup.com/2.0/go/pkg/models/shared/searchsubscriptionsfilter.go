package shared

type SearchSubscriptionsFilter struct {
	CustomerIds []string `json:"customer_ids,omitempty"`
	LocationIds []string `json:"location_ids,omitempty"`
}
