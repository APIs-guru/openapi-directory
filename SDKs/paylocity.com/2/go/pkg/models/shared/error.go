package shared



type ErrorOptions struct {
    Code *string `json:"code,omitempty"`
    Description *string `json:"description,omitempty"`
    
}

type Error struct {
    Field *string `json:"field,omitempty"`
    Message *string `json:"message,omitempty"`
    Options []ErrorOptions `json:"options,omitempty"`
    Path *string `json:"path,omitempty"`
    
}

