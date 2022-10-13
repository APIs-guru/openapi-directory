package shared

type HierarchicalInterviewLevel struct {
	Ident *string `json:"ident"`
}

type HierarchicalInterview struct {
	DataItems              []DataItem                  `json:"dataItems"`
	HierarchicalInterviews []HierarchicalInterview     `json:"hierarchicalInterviews"`
	Ident                  *string                     `json:"ident"`
	Level                  *HierarchicalInterviewLevel `json:"level"`
}
