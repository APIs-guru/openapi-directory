package shared

// DefaultResponseDtoOfBoolean
// The DefaultResponseDTO Class.
// Contains fields of DefaultResponse DTO in application.
type DefaultResponseDtoOfBoolean struct {
	IsError           *bool        `json:"isError,omitempty"`
	Message           *string      `json:"message,omitempty"`
	ResponseException *interface{} `json:"responseException,omitempty"`
	Result            *bool        `json:"result,omitempty"`
}
