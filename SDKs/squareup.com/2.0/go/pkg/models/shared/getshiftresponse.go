package shared



type GetShiftResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Shift *Shift `json:"shift,omitempty"`
    
}

