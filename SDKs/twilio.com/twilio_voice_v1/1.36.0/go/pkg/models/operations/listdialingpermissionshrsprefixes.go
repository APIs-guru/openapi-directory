package operations

import (
	"openapi/pkg/models/shared"
)

var ListDialingPermissionsHrsPrefixesServers = []string{
	"https://voice.twilio.com",
}

type ListDialingPermissionsHrsPrefixesPathParams struct {
	IsoCode string `pathParam:"style=simple,explode=false,name=IsoCode"`
}

type ListDialingPermissionsHrsPrefixesQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDialingPermissionsHrsPrefixesSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDialingPermissionsHrsPrefixesRequest struct {
	ServerURL   *string
	PathParams  ListDialingPermissionsHrsPrefixesPathParams
	QueryParams ListDialingPermissionsHrsPrefixesQueryParams
	Security    ListDialingPermissionsHrsPrefixesSecurity
}

type ListDialingPermissionsHrsPrefixes200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListDialingPermissionsHrsPrefixes200ApplicationJSONListDialingPermissionsHrsPrefixesResponse struct {
	Content []shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes `json:"content"`
	Meta    *ListDialingPermissionsHrsPrefixes200ApplicationJSONMeta                                 `json:"meta"`
}

type ListDialingPermissionsHrsPrefixesResponse struct {
	ContentType                               string
	ListDialingPermissionsHrsPrefixesResponse *ListDialingPermissionsHrsPrefixes200ApplicationJSONListDialingPermissionsHrsPrefixesResponse
	StatusCode                                int64
}
