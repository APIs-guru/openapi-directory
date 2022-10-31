package shared



type UpdateLocationResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Location *Location `json:"location,omitempty"`
    
}

