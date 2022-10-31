package shared

type Files struct {
	Items      []FileObject `json:"Items,omitempty"`
	Page       *int64       `json:"Page,omitempty"`
	PerPage    *int64       `json:"PerPage,omitempty"`
	TotalCount *int64       `json:"TotalCount,omitempty"`
}
