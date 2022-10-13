package shared

type CreateCustomerResponse struct {
	Customer *Customer `json:"customer"`
	Errors   []Error   `json:"errors"`
}
