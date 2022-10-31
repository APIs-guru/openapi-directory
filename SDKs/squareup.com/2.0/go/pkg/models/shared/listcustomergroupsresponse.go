package shared



type ListCustomerGroupsResponse struct {
    Cursor *string `json:"cursor,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    Groups []CustomerGroup `json:"groups,omitempty"`
    
}

