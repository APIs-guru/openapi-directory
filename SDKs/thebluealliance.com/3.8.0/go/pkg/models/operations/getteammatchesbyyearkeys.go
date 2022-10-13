package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamMatchesByYearKeysPathParams struct {
	TeamKey string `pathParam:"style=simple,explode=false,name=team_key"`
	Year    int64  `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamMatchesByYearKeysHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamMatchesByYearKeysSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamMatchesByYearKeysRequest struct {
	PathParams GetTeamMatchesByYearKeysPathParams
	Headers    GetTeamMatchesByYearKeysHeaders
	Security   GetTeamMatchesByYearKeysSecurity
}

type GetTeamMatchesByYearKeysResponse struct {
	ContentType                                       string
	Headers                                           map[string][]string
	StatusCode                                        int64
	GetTeamMatchesByYearKeys200ApplicationJSONStrings []string
}
