package shared

type CreateCustomerCardResponse struct {
	Card   *Card   `json:"card"`
	Errors []Error `json:"errors"`
}
