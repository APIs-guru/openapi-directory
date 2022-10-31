package shared

type AccountResponseData struct {
	Account Account `json:"account"`
}

type AccountResponse struct {
	Data AccountResponseData `json:"data"`
}
