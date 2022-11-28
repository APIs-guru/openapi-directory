package shared

// IdentityGetRequestOptions
// An optional object to filter `/identity/get` results.
type IdentityGetRequestOptions struct {
	AccountIds []string `json:"account_ids,omitempty"`
}
