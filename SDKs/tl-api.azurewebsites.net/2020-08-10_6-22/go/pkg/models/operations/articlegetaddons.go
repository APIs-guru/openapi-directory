package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleGetAddonsQueryParams struct {
	GymIds     *string `queryParam:"style=form,explode=true,name=gymIds"`
	Limit      *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int32  `queryParam:"style=form,explode=true,name=offset"`
	SearchText *string `queryParam:"style=form,explode=true,name=searchText"`
	Type       *string `queryParam:"style=form,explode=true,name=type"`
}

type ArticleGetAddonsRequest struct {
	QueryParams ArticleGetAddonsQueryParams
}

type ArticleGetAddonsResponse struct {
	APIResponse                                *shared.APIResponse
	ContentType                                string
	DefaultResponseDtoOfListOfArticleSearchDto *shared.DefaultResponseDtoOfListOfArticleSearchDto
	StatusCode                                 int64
}
