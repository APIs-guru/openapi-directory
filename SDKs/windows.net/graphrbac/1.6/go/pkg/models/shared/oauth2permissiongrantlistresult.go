package shared

// OAuth2PermissionGrantListResult
// Server response for get oauth2 permissions grants
type OAuth2PermissionGrantListResult struct {
	OdataNextLink *string       `json:"odata.nextLink,omitempty"`
	Value         []interface{} `json:"value,omitempty"`
}
