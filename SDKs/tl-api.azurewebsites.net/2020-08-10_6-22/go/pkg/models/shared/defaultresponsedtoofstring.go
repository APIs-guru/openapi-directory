package shared

// DefaultResponseDtoOfString
// The DefaultResponseDTO Class.
// Contains fields of DefaultResponse DTO in application.
type DefaultResponseDtoOfString struct {
	IsError           *bool        `json:"isError,omitempty"`
	Message           *string      `json:"message,omitempty"`
	ResponseException *interface{} `json:"responseException,omitempty"`
	Result            *string      `json:"result,omitempty"`
}
