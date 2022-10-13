package shared

type CreateCustomerGroupResponse struct {
	Errors []Error        `json:"errors"`
	Group  *CustomerGroup `json:"group"`
}
