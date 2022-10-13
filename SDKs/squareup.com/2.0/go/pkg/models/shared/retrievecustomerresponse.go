package shared

type RetrieveCustomerResponse struct {
	Customer *Customer `json:"customer"`
	Errors   []Error   `json:"errors"`
}
