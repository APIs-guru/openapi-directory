package shared

// InvestmentsTransactionsGetRequestOptions
// An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
type InvestmentsTransactionsGetRequestOptions struct {
	AccountIds []string `json:"account_ids,omitempty"`
	Count      *int64   `json:"count,omitempty"`
	Offset     *int64   `json:"offset,omitempty"`
}
