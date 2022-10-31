package shared

type PagedPayeeResponse2 struct {
	Content []GetPayeeListResponse2 `json:"content,omitempty"`
	Links   []interface{}           `json:"links,omitempty"`
	Page    *interface{}            `json:"page,omitempty"`
	Summary *interface{}            `json:"summary,omitempty"`
}
