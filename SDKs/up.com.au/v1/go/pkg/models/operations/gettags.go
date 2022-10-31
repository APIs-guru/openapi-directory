package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=page[size]"`
}

type GetTagsRequest struct {
	QueryParams GetTagsQueryParams
}

type GetTagsResponse struct {
	ContentType      string
	ListTagsResponse *shared.ListTagsResponse
	StatusCode       int64
}
