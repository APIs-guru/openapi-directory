package shared

type DefaultResponseDtoOfListOfArticleSearchDto struct {
	IsError           *bool              `json:"isError"`
	Message           *string            `json:"message"`
	ResponseException *interface{}       `json:"responseException"`
	Result            []ArticleSearchDto `json:"result"`
}
