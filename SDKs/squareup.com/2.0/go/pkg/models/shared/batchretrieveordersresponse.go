package shared

type BatchRetrieveOrdersResponse struct {
	Errors []Error `json:"errors"`
	Orders []Order `json:"orders"`
}
