package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsByYearPathParams struct {
	PageNum int64 `pathParam:"style=simple,explode=false,name=page_num"`
	Year    int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamsByYearHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamsByYearSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsByYearRequest struct {
	PathParams GetTeamsByYearPathParams
	Headers    GetTeamsByYearHeaders
	Security   GetTeamsByYearSecurity
}

type GetTeamsByYearResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Teams       []shared.Team
}
