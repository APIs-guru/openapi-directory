package shared



type ErrorData struct {
    Content map[string]interface{} `json:"content,omitempty"`
    Description *string `json:"description,omitempty"`
    
}

