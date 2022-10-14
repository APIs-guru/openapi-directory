package shared

type InvestmentsTransactionsGetRequestOptions struct {
	AccountIds []string `json:"account_ids,omitempty"`
	Count      *int64   `json:"count,omitempty"`
	Offset     *int64   `json:"offset,omitempty"`
}
