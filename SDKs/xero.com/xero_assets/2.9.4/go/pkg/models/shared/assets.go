package shared

type Assets struct {
	Items      []Asset      `json:"items"`
	Pagination *interface{} `json:"pagination"`
}
