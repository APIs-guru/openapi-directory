package shared

// PasswordCredentialsUpdateParameters
// Request parameters for a PasswordCredentials update operation.
type PasswordCredentialsUpdateParameters struct {
	Value []map[string]map[string]interface{} `json:"value"`
}
