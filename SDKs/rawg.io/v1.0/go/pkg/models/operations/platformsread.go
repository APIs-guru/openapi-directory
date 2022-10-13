package operations

import (
	"openapi/pkg/models/shared"
)

type PlatformsReadPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PlatformsReadRequest struct {
	PathParams PlatformsReadPathParams
}

type PlatformsReadResponse struct {
	ContentType    string
	PlatformSingle *shared.PlatformSingle
	StatusCode     int64
}
