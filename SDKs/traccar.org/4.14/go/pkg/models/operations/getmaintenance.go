package operations

import (
	"openapi/pkg/models/shared"
)

type GetMaintenanceQueryParams struct {
	All      *bool  `queryParam:"style=form,explode=true,name=all"`
	DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
	GroupID  *int64 `queryParam:"style=form,explode=true,name=groupId"`
	Refresh  *bool  `queryParam:"style=form,explode=true,name=refresh"`
	UserID   *int64 `queryParam:"style=form,explode=true,name=userId"`
}

type GetMaintenanceRequest struct {
	QueryParams GetMaintenanceQueryParams
}

type GetMaintenanceResponse struct {
	ContentType  string
	Maintenances []shared.Maintenance
	StatusCode   int64
}
