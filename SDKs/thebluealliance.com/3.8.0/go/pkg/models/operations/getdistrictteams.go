package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictTeamsPathParams struct {
	DistrictKey string `pathParam:"style=simple,explode=false,name=district_key"`
}

type GetDistrictTeamsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetDistrictTeamsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistrictTeamsRequest struct {
	PathParams GetDistrictTeamsPathParams
	Headers    GetDistrictTeamsHeaders
	Security   GetDistrictTeamsSecurity
}

type GetDistrictTeamsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Teams       []shared.Team
}
