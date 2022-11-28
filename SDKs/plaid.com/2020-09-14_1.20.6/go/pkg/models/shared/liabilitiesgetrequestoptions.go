package shared

// LiabilitiesGetRequestOptions
// An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
type LiabilitiesGetRequestOptions struct {
	AccountIds []string `json:"account_ids,omitempty"`
}
