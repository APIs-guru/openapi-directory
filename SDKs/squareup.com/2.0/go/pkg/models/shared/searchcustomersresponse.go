package shared

type SearchCustomersResponse struct {
	Cursor    *string    `json:"cursor,omitempty"`
	Customers []Customer `json:"customers,omitempty"`
	Errors    []Error    `json:"errors,omitempty"`
}
