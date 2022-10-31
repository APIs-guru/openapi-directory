package shared

type CreateCustomerResponse struct {
	Customer *Customer `json:"customer,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
