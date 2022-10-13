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
	Countries       []shared.APIV2010AccountAvailablePhoneNumberCountry `json:"countries"`
	End             *int64                                              `json:"end"`
	FirstPageURI    *string                                             `json:"first_page_uri"`
	NextPageURI     *string                                             `json:"next_page_uri"`
	Page            *int64                                              `json:"page"`
	PageSize        *int64                                              `json:"page_size"`
	PreviousPageURI *string                                             `json:"previous_page_uri"`
	Start           *int64                                              `json:"start"`
	URI             *string                                             `json:"uri"`
}

type ListAvailablePhoneNumberCountryResponse struct {
	ContentType                             string
	ListAvailablePhoneNumberCountryResponse *ListAvailablePhoneNumberCountry200ApplicationJSONListAvailablePhoneNumberCountryResponse
	StatusCode                              int64
}
