package shared

type CreateOrderResponse struct {
	Errors []Error `json:"errors"`
	Order  *Order  `json:"order"`
}
