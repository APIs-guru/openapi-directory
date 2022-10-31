package operations

import (
	"openapi/pkg/models/shared"
)

type PutGeofencesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutGeofencesIDRequest struct {
	PathParams PutGeofencesIDPathParams
	Request    shared.Geofence `request:"mediaType=application/json"`
}

type PutGeofencesIDResponse struct {
	ContentType string
	Geofence    *shared.Geofence
	StatusCode  int64
}
