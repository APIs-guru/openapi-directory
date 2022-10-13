package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamDistrictsPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamDistrictsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamDistrictsSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamDistrictsRequest struct {
	PathParams GetTeamDistrictsPathParams
	Headers    GetTeamDistrictsHeaders
	Security   GetTeamDistrictsSecurity
}

type GetTeamDistrictsResponse struct {
	ContentType   string
	DistrictLists []shared.DistrictList
	Headers       map[string][]string
	StatusCode    int64
}
