package shared

type ListCustomerGroupsResponse struct {
	Cursor *string         `json:"cursor"`
	Errors []Error         `json:"errors"`
	Groups []CustomerGroup `json:"groups"`
}
