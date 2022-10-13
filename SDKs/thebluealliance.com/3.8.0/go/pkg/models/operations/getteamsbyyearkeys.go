package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsByYearKeysPathParams struct {
	PageNum int64 `pathParam:"style=simple,explode=false,name=page_num"`
	Year    int64 `pathParam:"style=simple,explode=false,name=year"`
}

type GetTeamsByYearKeysHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetTeamsByYearKeysSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsByYearKeysRequest struct {
	PathParams GetTeamsByYearKeysPathParams
	Headers    GetTeamsByYearKeysHeaders
	Security   GetTeamsByYearKeysSecurity
}

type GetTeamsByYearKeysResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	GetTeamsByYearKeys200ApplicationJSONStrings []string
}
