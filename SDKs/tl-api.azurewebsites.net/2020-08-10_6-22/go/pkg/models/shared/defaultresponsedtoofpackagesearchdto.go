package shared

// DefaultResponseDtoOfPackageSearchDto
// The DefaultResponseDTO Class.
// Contains fields of DefaultResponse DTO in application.
type DefaultResponseDtoOfPackageSearchDto struct {
	IsError           *bool        `json:"isError,omitempty"`
	Message           *string      `json:"message,omitempty"`
	ResponseException *interface{} `json:"responseException,omitempty"`
	Result            *interface{} `json:"result,omitempty"`
}
