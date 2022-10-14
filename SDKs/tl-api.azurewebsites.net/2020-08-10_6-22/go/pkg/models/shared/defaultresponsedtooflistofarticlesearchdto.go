package shared

type DefaultResponseDtoOfListOfArticleSearchDto struct {
	IsError           *bool              `json:"isError,omitempty"`
	Message           *string            `json:"message,omitempty"`
	ResponseException *interface{}       `json:"responseException,omitempty"`
	Result            []ArticleSearchDto `json:"result,omitempty"`
}
