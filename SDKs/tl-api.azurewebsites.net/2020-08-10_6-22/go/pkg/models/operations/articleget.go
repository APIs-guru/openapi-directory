package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleGetPathParams struct {
	ArticleID int32 `pathParam:"style=simple,explode=false,name=articleID"`
}

type ArticleGetRequest struct {
	PathParams ArticleGetPathParams
}

type ArticleGetResponse struct {
	APIResponse                    *shared.APIResponse
	ContentType                    string
	DefaultResponseDtoOfArticleDto *shared.DefaultResponseDtoOfArticleDto
	StatusCode                     int64
}
