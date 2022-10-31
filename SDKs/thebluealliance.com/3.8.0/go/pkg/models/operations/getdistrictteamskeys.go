package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictTeamsKeysPathParams struct {
	DistrictKey string `pathParam:"style=simple,explode=false,name=district_key"`
}

type GetDistrictTeamsKeysHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
}

type GetDistrictTeamsKeysSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistrictTeamsKeysRequest struct {
	PathParams GetDistrictTeamsKeysPathParams
	Headers    GetDistrictTeamsKeysHeaders
	Security   GetDistrictTeamsKeysSecurity
}

type GetDistrictTeamsKeysResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetDistrictTeamsKeys200ApplicationJSONStrings []string
}
