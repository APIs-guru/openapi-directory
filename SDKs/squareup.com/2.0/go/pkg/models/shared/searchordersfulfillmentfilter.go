package shared

type SearchOrdersFulfillmentFilter struct {
	FulfillmentStates []string `json:"fulfillment_states"`
	FulfillmentTypes  []string `json:"fulfillment_types"`
}
