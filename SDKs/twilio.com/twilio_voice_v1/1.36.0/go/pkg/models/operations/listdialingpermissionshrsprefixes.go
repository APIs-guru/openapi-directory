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

type ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse struct {
	Content []shared.VoiceV1DialingPermissionsDialingPermissionsCountryDialingPermissionsHrsPrefixes `json:"content,omitempty"`
	Meta    *ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponseMeta          `json:"meta,omitempty"`
}

type ListDialingPermissionsHrsPrefixesResponse struct {
	ContentType                               string
	ListDialingPermissionsHrsPrefixesResponse *ListDialingPermissionsHrsPrefixesListDialingPermissionsHrsPrefixesResponse
	StatusCode                                int64
}
