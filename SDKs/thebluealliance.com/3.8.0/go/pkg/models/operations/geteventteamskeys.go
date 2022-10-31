package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventTeamsKeysPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventTeamsKeysHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventTeamsKeysSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventTeamsKeysRequest struct {
	PathParams GetEventTeamsKeysPathParams
	Headers    GetEventTeamsKeysHeaders
	Security   GetEventTeamsKeysSecurity
}

type GetEventTeamsKeysResponse struct {
	ContentType                                string
	Headers                                    map[string][]string
	StatusCode                                 int64
	GetEventTeamsKeys200ApplicationJSONStrings []string
}
