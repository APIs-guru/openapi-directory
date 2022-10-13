package shared

type Files struct {
	Items      []FileObject `json:"Items"`
	Page       *int64       `json:"Page"`
	PerPage    *int64       `json:"PerPage"`
	TotalCount *int64       `json:"TotalCount"`
}
