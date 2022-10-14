package shared

type UpdateCustomerGroupResponse struct {
	Errors []Error        `json:"errors,omitempty"`
	Group  *CustomerGroup `json:"group,omitempty"`
}
