package shared

// PasswordCredentialListResult
// PasswordCredential list operation result.
type PasswordCredentialListResult struct {
	Value []map[string]map[string]interface{} `json:"value,omitempty"`
}
