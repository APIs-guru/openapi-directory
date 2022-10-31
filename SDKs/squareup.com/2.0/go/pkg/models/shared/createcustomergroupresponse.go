package shared



type CreateCustomerGroupResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Group *CustomerGroup `json:"group,omitempty"`
    
}

