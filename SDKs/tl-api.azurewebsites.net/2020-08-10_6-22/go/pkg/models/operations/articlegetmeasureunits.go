package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleGetMeasureUnitsQueryParams struct {
	Type *string `queryParam:"style=form,explode=true,name=type"`
}

type ArticleGetMeasureUnitsRequest struct {
	QueryParams ArticleGetMeasureUnitsQueryParams
}

type ArticleGetMeasureUnitsResponse struct {
	APIResponse                   *shared.APIResponse
	ContentType                   string
	DefaultResponseDtoOfStatusDto *shared.DefaultResponseDtoOfStatusDto
	StatusCode                    int64
}
