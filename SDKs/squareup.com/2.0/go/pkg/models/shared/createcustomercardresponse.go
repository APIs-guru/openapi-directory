package shared

type CreateCustomerCardResponse struct {
	Card   *Card   `json:"card,omitempty"`
	Errors []Error `json:"errors,omitempty"`
}
