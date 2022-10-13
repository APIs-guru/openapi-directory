package shared

type TransactionResponseData struct {
	Transaction TransactionDetail `json:"transaction"`
}

type TransactionResponse struct {
	Data TransactionResponseData `json:"data"`
}
