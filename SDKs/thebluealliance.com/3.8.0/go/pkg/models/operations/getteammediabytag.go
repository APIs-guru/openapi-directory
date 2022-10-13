package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMediaByTagPathParams struct {
	MediaTag string `pathParam:"style=simple,explode=false,name=media_tag"`
	TeamKey  string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamMediaByTagHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamMediaByTagSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamMediaByTagRequest struct {
	PathParams GetTeamMediaByTagPathParams
	Headers    GetTeamMediaByTagHeaders
	Security   GetTeamMediaByTagSecurity
}

type GetTeamMediaByTagResponse struct {
	ContentType string
	Headers     map[string][]string
	Media       []shared.Media
	StatusCode  int64
}
