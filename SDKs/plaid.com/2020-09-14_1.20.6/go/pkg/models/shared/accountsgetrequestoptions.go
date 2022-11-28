package shared

// AccountsGetRequestOptions
// An optional object to filter `/accounts/get` results.
type AccountsGetRequestOptions struct {
	AccountIds []string `json:"account_ids,omitempty"`
}
