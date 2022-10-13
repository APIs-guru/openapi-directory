package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamEventMatchesKeysPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
	TeamKey  string `pathParam:"style=simple,explode=false,name=team_key"`
}

type GetTeamEventMatchesKeysHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamEventMatchesKeysSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamEventMatchesKeysRequest struct {
	PathParams GetTeamEventMatchesKeysPathParams
	Headers    GetTeamEventMatchesKeysHeaders
	Security   GetTeamEventMatchesKeysSecurity
}

type GetTeamEventMatchesKeysResponse struct {
	ContentType                                      string
	Headers                                          map[string][]string
	StatusCode                                       int64
	GetTeamEventMatchesKeys200ApplicationJSONStrings []string
}
