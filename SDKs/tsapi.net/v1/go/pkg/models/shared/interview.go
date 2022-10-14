package shared

type Interview struct {
	DataItems              []DataItem              `json:"dataItems,omitempty"`
	HierarchicalInterviews []HierarchicalInterview `json:"hierarchicalInterviews,omitempty"`
	Ident                  *string                 `json:"ident,omitempty"`
}
