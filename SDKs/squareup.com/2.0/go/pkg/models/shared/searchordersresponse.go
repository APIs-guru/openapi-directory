package shared

type SearchOrdersResponse struct {
	Cursor       *string      `json:"cursor,omitempty"`
	Errors       []Error      `json:"errors,omitempty"`
	OrderEntries []OrderEntry `json:"order_entries,omitempty"`
	Orders       []Order      `json:"orders,omitempty"`
}
