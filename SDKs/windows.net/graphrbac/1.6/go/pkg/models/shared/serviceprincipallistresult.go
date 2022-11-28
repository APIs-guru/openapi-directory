package shared

// ServicePrincipalListResult
// Server response for get tenant service principals API call.
type ServicePrincipalListResult struct {
	OdataNextLink *string                             `json:"odata.nextLink,omitempty"`
	Value         []map[string]map[string]interface{} `json:"value,omitempty"`
}
