package operations

import (
	"openapi/pkg/models/shared"
)

var ListAvailablePhoneNumberCountryServers = []string{
	"https://api.twilio.com",
}

type ListAvailablePhoneNumberCountryPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListAvailablePhoneNumberCountryQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListAvailablePhoneNumberCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAvailablePhoneNumberCountryRequest struct {
	ServerURL   *string
	PathParams  ListAvailablePhoneNumberCountryPathParams
	QueryParams ListAvailablePhoneNumberCountryQueryParams
	Security    ListAvailablePhoneNumberCountrySecurity
}

type ListAvailablePhoneNumberCountry200ApplicationJSONListAvailablePhoneNumberCountryResponse struct {
	Countries       []shared.APIV2010AccountAvailablePhoneNumberCountry `json:"countries,omitempty"`
	End             *int64                                              `json:"end,omitempty"`
	FirstPageURI    *string                                             `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                             `json:"next_page_uri,omitempty"`
	Page            *int64                                              `json:"page,omitempty"`
	PageSize        *int64                                              `json:"page_size,omitempty"`
	PreviousPageURI *string                                             `json:"previous_page_uri,omitempty"`
	Start           *int64                                              `json:"start,omitempty"`
	URI             *string                                             `json:"uri,omitempty"`
}

type ListAvailablePhoneNumberCountryResponse struct {
	ContentType                             string
	ListAvailablePhoneNumberCountryResponse *ListAvailablePhoneNumberCountry200ApplicationJSONListAvailablePhoneNumberCountryResponse
	StatusCode                              int64
}
