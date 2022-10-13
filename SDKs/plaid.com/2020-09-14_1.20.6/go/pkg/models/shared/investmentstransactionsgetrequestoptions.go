package shared

type InvestmentsTransactionsGetRequestOptions struct {
	AccountIds []string `json:"account_ids"`
	Count      *int64   `json:"count"`
	Offset     *int64   `json:"offset"`
}
