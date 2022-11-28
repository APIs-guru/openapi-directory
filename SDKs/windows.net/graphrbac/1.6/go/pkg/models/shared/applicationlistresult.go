package shared

// ApplicationListResult
// Application list operation result.
type ApplicationListResult struct {
	OdataNextLink *string                             `json:"odata.nextLink,omitempty"`
	Value         []map[string]map[string]interface{} `json:"value,omitempty"`
}
