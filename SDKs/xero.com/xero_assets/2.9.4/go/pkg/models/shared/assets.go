package shared

type Assets struct {
	Items      []Asset      `json:"items,omitempty"`
	Pagination *interface{} `json:"pagination,omitempty"`
}
