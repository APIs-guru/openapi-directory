package shared



type RetrieveCustomerGroupResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Group *CustomerGroup `json:"group,omitempty"`
    
}

