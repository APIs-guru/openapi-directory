package shared

type SearchOrdersResponse struct {
	Cursor       *string      `json:"cursor"`
	Errors       []Error      `json:"errors"`
	OrderEntries []OrderEntry `json:"order_entries"`
	Orders       []Order      `json:"orders"`
}
