package shared

type UpdateOrderResponse struct {
	Errors []Error `json:"errors"`
	Order  *Order  `json:"order"`
}
