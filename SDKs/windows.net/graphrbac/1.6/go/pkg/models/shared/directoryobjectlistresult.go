package shared

// DirectoryObjectListResult
// DirectoryObject list operation result.
type DirectoryObjectListResult struct {
	OdataNextLink *string                             `json:"odata.nextLink,omitempty"`
	Value         []map[string]map[string]interface{} `json:"value,omitempty"`
}
