package shared

type ChargeResponse struct {
	Errors      []Error      `json:"errors"`
	Transaction *Transaction `json:"transaction"`
}
