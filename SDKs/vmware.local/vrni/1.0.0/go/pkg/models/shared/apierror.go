package shared



type APIError struct {
    Code *int32 `json:"code,omitempty"`
    Details []ErrorDetail `json:"details,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

