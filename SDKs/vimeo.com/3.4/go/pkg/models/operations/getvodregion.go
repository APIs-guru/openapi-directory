package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodRegionPathParams struct {
	Country    string  `pathParam:"style=simple,explode=false,name=country"`
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type GetVodRegionRequest struct {
	PathParams GetVodRegionPathParams
}

type GetVodRegionResponse struct {
	ContentType    string
	StatusCode     int64
	LegacyError    *shared.LegacyError
	OnDemandRegion *shared.OnDemandRegion
}
