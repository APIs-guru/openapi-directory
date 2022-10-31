package shared



type CreateBreakTypeResponse struct {
    BreakType *BreakType `json:"break_type,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

