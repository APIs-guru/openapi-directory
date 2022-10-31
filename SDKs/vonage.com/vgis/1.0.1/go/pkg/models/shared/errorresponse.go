package shared



type ErrorResponse struct {
    ErrorCode *string `json:"errorCode,omitempty"`
    ErrorMessage *string `json:"errorMessage,omitempty"`
    Errors []Error `json:"errors,omitempty"`
    
}

