package shared

type BatchRetrieveOrdersResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Orders []Order `json:"orders,omitempty"`
}
