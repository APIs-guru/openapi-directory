package shared

type UpdateOrderResponse struct {
	Errors []Error `json:"errors,omitempty"`
	Order  *Order  `json:"order,omitempty"`
}
