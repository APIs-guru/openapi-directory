package shared

type DefaultResponseDtoOfPackageDto struct {
	IsError           *bool        `json:"isError,omitempty"`
	Message           *string      `json:"message,omitempty"`
	ResponseException *interface{} `json:"responseException,omitempty"`
	Result            *interface{} `json:"result,omitempty"`
}
