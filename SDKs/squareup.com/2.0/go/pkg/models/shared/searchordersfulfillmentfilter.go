package shared



type SearchOrdersFulfillmentFilter struct {
    FulfillmentStates []string `json:"fulfillment_states,omitempty"`
    FulfillmentTypes []string `json:"fulfillment_types,omitempty"`
    
}

