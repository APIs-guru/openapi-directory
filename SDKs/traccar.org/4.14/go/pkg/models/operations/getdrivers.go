package operations

import (
	"openapi/pkg/models/shared"
)

type GetDriversQueryParams struct {
	All      *bool  `queryParam:"style=form,explode=true,name=all"`
	DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
	GroupID  *int64 `queryParam:"style=form,explode=true,name=groupId"`
	Refresh  *bool  `queryParam:"style=form,explode=true,name=refresh"`
	UserID   *int64 `queryParam:"style=form,explode=true,name=userId"`
}

type GetDriversRequest struct {
	QueryParams GetDriversQueryParams
}

type GetDriversResponse struct {
	ContentType string
	Drivers     []shared.Driver
	StatusCode  int64
}
