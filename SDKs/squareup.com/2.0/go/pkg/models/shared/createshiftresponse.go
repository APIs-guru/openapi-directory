package shared



type CreateShiftResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Shift *Shift `json:"shift,omitempty"`
    
}

