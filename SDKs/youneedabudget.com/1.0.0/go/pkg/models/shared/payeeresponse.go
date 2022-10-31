package shared

type PayeeResponseData struct {
	Payee Payee `json:"payee"`
}

type PayeeResponse struct {
	Data PayeeResponseData `json:"data"`
}
