package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommandsQueryParams struct {
	All      *bool  `queryParam:"style=form,explode=true,name=all"`
	DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
	GroupID  *int64 `queryParam:"style=form,explode=true,name=groupId"`
	Refresh  *bool  `queryParam:"style=form,explode=true,name=refresh"`
	UserID   *int64 `queryParam:"style=form,explode=true,name=userId"`
}

type GetCommandsRequest struct {
	QueryParams GetCommandsQueryParams
}

type GetCommandsResponse struct {
	Commands    []shared.Command
	ContentType string
	StatusCode  int64
}
