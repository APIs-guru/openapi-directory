package operations

import (
	"openapi/pkg/models/shared"
)

type AddVodRegionPathParams struct {
	Country    string  `pathParam:"style=simple,explode=false,name=country"`
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type AddVodRegionSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVodRegionRequest struct {
	PathParams AddVodRegionPathParams
	Security   AddVodRegionSecurity
}

type AddVodRegionResponse struct {
	ContentType    string
	StatusCode     int64
	LegacyError    *shared.LegacyError
	OnDemandRegion *shared.OnDemandRegion
}
