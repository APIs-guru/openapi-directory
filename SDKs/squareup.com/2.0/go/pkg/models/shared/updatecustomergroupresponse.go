package shared

type UpdateCustomerGroupResponse struct {
	Errors []Error        `json:"errors"`
	Group  *CustomerGroup `json:"group"`
}
