package shared



type ErrorDetail struct {
    Code *int32 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    Target []string `json:"target,omitempty"`
    
}

