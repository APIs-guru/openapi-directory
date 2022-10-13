package shared

type CalculateOrderResponse struct {
	Errors []Error `json:"errors"`
	Order  *Order  `json:"order"`
}
