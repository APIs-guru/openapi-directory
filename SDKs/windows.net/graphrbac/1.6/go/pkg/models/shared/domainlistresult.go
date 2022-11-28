package shared

// DomainListResult
// Server response for Get tenant domains API call.
type DomainListResult struct {
	Value []map[string]map[string]interface{} `json:"value,omitempty"`
}
