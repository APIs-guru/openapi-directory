package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupsQueryParams struct {
	All    *bool  `queryParam:"style=form,explode=true,name=all"`
	UserID *int64 `queryParam:"style=form,explode=true,name=userId"`
}

type GetGroupsRequest struct {
	QueryParams GetGroupsQueryParams
}

type GetGroupsResponse struct {
	ContentType string
	Groups      []shared.Group
	StatusCode  int64
}
