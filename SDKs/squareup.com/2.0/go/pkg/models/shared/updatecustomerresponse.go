package shared

type UpdateCustomerResponse struct {
	Customer *Customer `json:"customer"`
	Errors   []Error   `json:"errors"`
}
