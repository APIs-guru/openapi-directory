package shared



type ErrorResponseDto struct {
    Description *string `json:"Description,omitempty"`
    ErrorMessage *string `json:"ErrorMessage,omitempty"`
    StatusCode *int32 `json:"StatusCode,omitempty"`
    
}

