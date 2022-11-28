package shared

// AppRoleAssignmentListResult
// AppRoleAssignment list operation result.
type AppRoleAssignmentListResult struct {
	OdataNextLink *string                             `json:"odata.nextLink,omitempty"`
	Value         []map[string]map[string]interface{} `json:"value,omitempty"`
}
