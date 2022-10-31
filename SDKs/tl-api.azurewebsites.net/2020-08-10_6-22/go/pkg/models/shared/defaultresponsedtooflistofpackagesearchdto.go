package shared



type DefaultResponseDtoOfListOfPackageSearchDto struct {
    IsError *bool `json:"isError,omitempty"`
    Message *string `json:"message,omitempty"`
    ResponseException *interface{} `json:"responseException,omitempty"`
    Result []PackageSearchDto `json:"result,omitempty"`
    
}

