package shared



type APIResponse struct {
    IsError *bool `json:"isError,omitempty"`
    Message *string `json:"message,omitempty"`
    ResponseException *interface{} `json:"responseException,omitempty"`
    Result *interface{} `json:"result,omitempty"`
    StatusCode *int32 `json:"statusCode,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

