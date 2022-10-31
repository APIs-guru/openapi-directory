package shared



type TemplateResponse struct {
    Data *Template `json:"data,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

