package shared

type Interview struct {
	DataItems              []DataItem              `json:"dataItems"`
	HierarchicalInterviews []HierarchicalInterview `json:"hierarchicalInterviews"`
	Ident                  *string                 `json:"ident"`
}
