package shared

// InvestmentHoldingsGetRequestOptions
// An optional object to filter `/investments/holdings/get` results. If provided, must not be `null`.
type InvestmentHoldingsGetRequestOptions struct {
	AccountIds []string `json:"account_ids,omitempty"`
}
