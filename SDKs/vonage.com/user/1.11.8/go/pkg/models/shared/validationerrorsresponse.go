package shared



type ValidationErrorsResponse struct {
    Instance *string `json:"instance,omitempty"`
    InvalidParameters []DetailedInvalidParam `json:"invalid_parameters,omitempty"`
    Status *float64 `json:"status,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

