package operations

import (
	"openapi/pkg/models/shared"
)

type GetDistrictEventsKeysPathParams struct {
	DistrictKey string `pathParam:"style=simple,explode=false,name=district_key"`
}

type GetDistrictEventsKeysHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
}

type GetDistrictEventsKeysSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetDistrictEventsKeysRequest struct {
	PathParams GetDistrictEventsKeysPathParams
	Headers    GetDistrictEventsKeysHeaders
	Security   GetDistrictEventsKeysSecurity
}

type GetDistrictEventsKeysResponse struct {
	ContentType                                    string
	Headers                                        map[string][]string
	StatusCode                                     int64
	GetDistrictEventsKeys200ApplicationJSONStrings []string
}
