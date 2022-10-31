package shared



type DefaultResponseDtoOfString struct {
    IsError *bool `json:"isError,omitempty"`
    Message *string `json:"message,omitempty"`
    ResponseException *interface{} `json:"responseException,omitempty"`
    Result *string `json:"result,omitempty"`
    
}

