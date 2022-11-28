package shared

// Statements

// https://developer.xero.com/documentation/bank-feeds-api/statements
type Statements struct {
	Items      []Statement `json:"items,omitempty"`
	Pagination *Pagination `json:"pagination,omitempty"`
}
