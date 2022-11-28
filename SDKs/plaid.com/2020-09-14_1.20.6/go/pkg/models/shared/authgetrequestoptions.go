package shared

// AuthGetRequestOptions
// An optional object to filter `/auth/get` results.
type AuthGetRequestOptions struct {
	AccountIds []string `json:"account_ids,omitempty"`
}
