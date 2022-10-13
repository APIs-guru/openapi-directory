package shared

type PagedPayeeResponse struct {
	Content []GetPayeeListResponse `json:"content"`
	Links   []interface{}          `json:"links"`
	Page    *interface{}           `json:"page"`
	Summary *interface{}           `json:"summary"`
}
