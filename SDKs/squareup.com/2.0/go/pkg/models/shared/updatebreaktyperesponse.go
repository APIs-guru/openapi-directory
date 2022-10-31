package shared



type UpdateBreakTypeResponse struct {
    BreakType *BreakType `json:"break_type,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

