package shared

// UserListResult
// Server response for Get tenant users API call.
type UserListResult struct {
	OdataNextLink *string                             `json:"odata.nextLink,omitempty"`
	Value         []map[string]map[string]interface{} `json:"value,omitempty"`
}
