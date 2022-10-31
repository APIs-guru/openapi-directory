package shared



type HierarchicalInterviewLevel struct {
    Ident *string `json:"ident,omitempty"`
    
}

type HierarchicalInterview struct {
    DataItems []DataItem `json:"dataItems,omitempty"`
    HierarchicalInterviews []HierarchicalInterview `json:"hierarchicalInterviews,omitempty"`
    Ident *string `json:"ident,omitempty"`
    Level *HierarchicalInterviewLevel `json:"level,omitempty"`
    
}

