package shared

type ListTransactionsResponseLinks struct {
	Next string `json:"next"`
	Prev string `json:"prev"`
}

// ListTransactionsResponse
// Successful response to get all transactions. This returns a paginated
// list of transactions, which can be scrolled by following the `prev` and
// `next` links if present.
type ListTransactionsResponse struct {
	Data  []TransactionResource         `json:"data"`
	Links ListTransactionsResponseLinks `json:"links"`
}
