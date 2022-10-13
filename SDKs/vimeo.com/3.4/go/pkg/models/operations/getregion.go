package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegionPathParams struct {
	Country string `pathParam:"style=simple,explode=false,name=country"`
}

type GetRegionRequest struct {
	PathParams GetRegionPathParams
}

type GetRegionResponse struct {
	ContentType    string
	StatusCode     int64
	LegacyError    *shared.LegacyError
	OnDemandRegion *shared.OnDemandRegion
}
