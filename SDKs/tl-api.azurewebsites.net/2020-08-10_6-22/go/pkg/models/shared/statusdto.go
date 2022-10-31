package shared



type StatusDto struct {
    MessageID *string `json:"messageId,omitempty"`
    StatusText *string `json:"statusText,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

