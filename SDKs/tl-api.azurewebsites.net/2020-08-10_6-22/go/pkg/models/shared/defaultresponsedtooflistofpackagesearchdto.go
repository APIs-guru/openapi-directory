package shared

// DefaultResponseDtoOfListOfPackageSearchDto
// The DefaultResponseDTO Class.
// Contains fields of DefaultResponse DTO in application.
type DefaultResponseDtoOfListOfPackageSearchDto struct {
	IsError           *bool              `json:"isError,omitempty"`
	Message           *string            `json:"message,omitempty"`
	ResponseException *interface{}       `json:"responseException,omitempty"`
	Result            []PackageSearchDto `json:"result,omitempty"`
}
