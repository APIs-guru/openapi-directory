package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictRankingsPathParams struct {
	DistrictKey string `pathParam:"style=simple,explode=false,name=district_key"`
}

type GetDistrictRankingsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetDistrictRankingsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistrictRankingsRequest struct {
	PathParams GetDistrictRankingsPathParams
	Headers    GetDistrictRankingsHeaders
	Security   GetDistrictRankingsSecurity
}

type GetDistrictRankingsResponse struct {
	ContentType      string
	DistrictRankings []shared.DistrictRanking
	Headers          map[string][]string
	StatusCode       int64
}
