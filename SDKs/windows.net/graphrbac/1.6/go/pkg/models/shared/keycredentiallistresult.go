package shared

// KeyCredentialListResult
// KeyCredential list operation result.
type KeyCredentialListResult struct {
	Value []map[string]map[string]interface{} `json:"value,omitempty"`
}
