package shared

type Statements struct {
	Items      []Statement `json:"items,omitempty"`
	Pagination *Pagination `json:"pagination,omitempty"`
}
