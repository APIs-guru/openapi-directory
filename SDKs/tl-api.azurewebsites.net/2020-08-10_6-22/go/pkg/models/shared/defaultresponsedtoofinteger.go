package shared



type DefaultResponseDtoOfInteger struct {
    IsError *bool `json:"isError,omitempty"`
    Message *string `json:"message,omitempty"`
    ResponseException *interface{} `json:"responseException,omitempty"`
    Result *int32 `json:"result,omitempty"`
    
}

