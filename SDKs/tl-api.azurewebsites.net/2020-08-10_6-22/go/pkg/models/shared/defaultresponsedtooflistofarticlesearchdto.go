package shared

// DefaultResponseDtoOfListOfArticleSearchDto
// The DefaultResponseDTO Class.
// Contains fields of DefaultResponse DTO in application.
type DefaultResponseDtoOfListOfArticleSearchDto struct {
	IsError           *bool              `json:"isError,omitempty"`
	Message           *string            `json:"message,omitempty"`
	ResponseException *interface{}       `json:"responseException,omitempty"`
	Result            []ArticleSearchDto `json:"result,omitempty"`
}
