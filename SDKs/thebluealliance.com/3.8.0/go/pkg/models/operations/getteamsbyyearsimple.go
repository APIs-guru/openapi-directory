package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsByYearSimplePathParams struct {
	PageNum int64 `pathParam:"style=simple,explode=false,name=page_num"`
	Year    int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamsByYearSimpleHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamsByYearSimpleSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsByYearSimpleRequest struct {
	PathParams GetTeamsByYearSimplePathParams
	Headers    GetTeamsByYearSimpleHeaders
	Security   GetTeamsByYearSimpleSecurity
}

type GetTeamsByYearSimpleResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	TeamSimples []shared.TeamSimple
}
