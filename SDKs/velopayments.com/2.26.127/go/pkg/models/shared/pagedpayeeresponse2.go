package shared

type PagedPayeeResponse2 struct {
	Content []GetPayeeListResponse2 `json:"content"`
	Links   []interface{}           `json:"links"`
	Page    *interface{}            `json:"page"`
	Summary *interface{}            `json:"summary"`
}
