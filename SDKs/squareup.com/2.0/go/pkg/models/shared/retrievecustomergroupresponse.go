package shared

type RetrieveCustomerGroupResponse struct {
	Errors []Error        `json:"errors"`
	Group  *CustomerGroup `json:"group"`
}
