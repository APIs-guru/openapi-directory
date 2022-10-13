package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupPathParams struct {
	GroupID float64 `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupRequest struct {
	PathParams GetGroupPathParams
}

type GetGroupResponse struct {
	ContentType string
	StatusCode  int64
	Group       *shared.Group
}
