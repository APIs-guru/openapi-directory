package shared

type ListCustomersResponse struct {
	Cursor    *string    `json:"cursor"`
	Customers []Customer `json:"customers"`
	Errors    []Error    `json:"errors"`
}
