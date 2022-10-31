package operations

import (
	"openapi/pkg/models/shared"
)

type GetEventMatchesKeysPathParams struct {
	EventKey string `pathParam:"style=simple,explode=false,name=event_key"`
}

type GetEventMatchesKeysHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetEventMatchesKeysSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetEventMatchesKeysRequest struct {
	PathParams GetEventMatchesKeysPathParams
	Headers    GetEventMatchesKeysHeaders
	Security   GetEventMatchesKeysSecurity
}

type GetEventMatchesKeysResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	StatusCode                                   int64
	GetEventMatchesKeys200ApplicationJSONStrings []string
}
