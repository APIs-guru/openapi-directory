package shared

type SearchOrdersFilter struct {
	CustomerFilter    *SearchOrdersCustomerFilter    `json:"customer_filter"`
	DateTimeFilter    *SearchOrdersDateTimeFilter    `json:"date_time_filter"`
	FulfillmentFilter *SearchOrdersFulfillmentFilter `json:"fulfillment_filter"`
	SourceFilter      *SearchOrdersSourceFilter      `json:"source_filter"`
	StateFilter       *SearchOrdersStateFilter       `json:"state_filter"`
}
