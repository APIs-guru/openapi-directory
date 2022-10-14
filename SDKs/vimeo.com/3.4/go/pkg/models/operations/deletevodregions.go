package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVodRegionsPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type DeleteVodRegionsRequestBody struct {
	Countries []string `json:"countries,omitempty"`
}

type DeleteVodRegionsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVodRegionsRequest struct {
	PathParams DeleteVodRegionsPathParams
	Request    *DeleteVodRegionsRequestBody `request:"mediaType=application/vnd.vimeo.ondemand.region+json"`
	Security   DeleteVodRegionsSecurity
}

type DeleteVodRegionsResponse struct {
	ContentType     string
	StatusCode      int64
	LegacyError     *shared.LegacyError
	OnDemandRegions []shared.OnDemandRegion
}
