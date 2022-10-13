package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleDeleteQueryParams struct {
	ArticleID *int32 `queryParam:"style=form,explode=true,name=ArticleId"`
}

type ArticleDeleteRequest struct {
	QueryParams ArticleDeleteQueryParams
}

type ArticleDeleteResponse struct {
	APIException                *shared.APIException
	ContentType                 string
	DefaultResponseDtoOfInteger *shared.DefaultResponseDtoOfInteger
	StatusCode                  int64
}
