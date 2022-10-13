package shared

type SearchCustomersResponse struct {
	Cursor    *string    `json:"cursor"`
	Customers []Customer `json:"customers"`
	Errors    []Error    `json:"errors"`
}
