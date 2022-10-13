package operations

import (
	"openapi/pkg/models/shared"
)

type GetVodSeasonPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
	SeasonID   float64 `pathParam:"style=simple,explode=false,name=season_id"`
}

type GetVodSeasonRequest struct {
	PathParams GetVodSeasonPathParams
}

type GetVodSeasonResponse struct {
	ContentType    string
	StatusCode     int64
	LegacyError    *shared.LegacyError
	OnDemandSeason *shared.OnDemandSeason
}
