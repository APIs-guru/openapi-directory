package shared

type RetrieveOrderResponse struct {
	Errors []Error `json:"errors"`
	Order  *Order  `json:"order"`
}
