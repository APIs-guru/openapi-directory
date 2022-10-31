package shared



type LocalisationDetails struct {
    Parameters map[string]string `json:"parameters,omitempty"`
    Template *string `json:"template,omitempty"`
    
}

