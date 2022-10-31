package operations

import (
	"openapi/pkg/models/shared"
)

type GetGeofencesQueryParams struct {
	All      *bool  `queryParam:"style=form,explode=true,name=all"`
	DeviceID *int64 `queryParam:"style=form,explode=true,name=deviceId"`
	GroupID  *int64 `queryParam:"style=form,explode=true,name=groupId"`
	Refresh  *bool  `queryParam:"style=form,explode=true,name=refresh"`
	UserID   *int64 `queryParam:"style=form,explode=true,name=userId"`
}

type GetGeofencesRequest struct {
	QueryParams GetGeofencesQueryParams
}

type GetGeofencesResponse struct {
	ContentType string
	Geofences   []shared.Geofence
	StatusCode  int64
}
