package shared

type ListTransactionsResponse struct {
	Cursor       *string       `json:"cursor"`
	Errors       []Error       `json:"errors"`
	Transactions []Transaction `json:"transactions"`
}
