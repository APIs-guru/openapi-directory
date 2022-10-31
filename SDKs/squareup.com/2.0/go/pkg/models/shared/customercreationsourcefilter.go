package shared



type CustomerCreationSourceFilter struct {
    Rule *string `json:"rule,omitempty"`
    Values []string `json:"values,omitempty"`
    
}

