package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleSearchQueryParams struct {
	ActiveStatus *int32  `queryParam:"style=form,explode=true,name=activeStatus"`
	GymID        *int32  `queryParam:"style=form,explode=true,name=gymId"`
	Limit        *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset       *int32  `queryParam:"style=form,explode=true,name=offset"`
	OrderBy      *string `queryParam:"style=form,explode=true,name=orderBy"`
	SearchText   *string `queryParam:"style=form,explode=true,name=searchText"`
	Type         *string `queryParam:"style=form,explode=true,name=type"`
}

type ArticleSearchRequest struct {
	QueryParams ArticleSearchQueryParams
}

type ArticleSearchResponse struct {
	APIResponse                                *shared.APIResponse
	ContentType                                string
	DefaultResponseDtoOfListOfArticleSearchDto *shared.DefaultResponseDtoOfListOfArticleSearchDto
	StatusCode                                 int64
}
