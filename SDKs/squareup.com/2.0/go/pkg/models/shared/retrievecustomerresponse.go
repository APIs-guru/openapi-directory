package shared

type RetrieveCustomerResponse struct {
	Customer *Customer `json:"customer,omitempty"`
	Errors   []Error   `json:"errors,omitempty"`
}
