package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserGroupNoticesQueryParams struct {
	GroupIds *string `queryParam:"style=form,explode=true,name=group_ids"`
}

type GetUserGroupNoticesRequest struct {
	QueryParams GetUserGroupNoticesQueryParams
}

type GetUserGroupNoticesResponse struct {
	ContentType  string
	GroupNotices []shared.GroupNotice
	StatusCode   int64
}
