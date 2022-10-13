package shared

type PayOrderResponse struct {
	Errors []Error `json:"errors"`
	Order  *Order  `json:"order"`
}
