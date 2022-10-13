package shared

type Statements struct {
	Items      []Statement `json:"items"`
	Pagination *Pagination `json:"pagination"`
}
