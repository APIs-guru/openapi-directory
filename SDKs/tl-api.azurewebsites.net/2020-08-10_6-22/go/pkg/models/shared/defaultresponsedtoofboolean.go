package shared



type DefaultResponseDtoOfBoolean struct {
    IsError *bool `json:"isError,omitempty"`
    Message *string `json:"message,omitempty"`
    ResponseException *interface{} `json:"responseException,omitempty"`
    Result *bool `json:"result,omitempty"`
    
}

