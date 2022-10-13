package operations

import (
	"openapi/pkg/models/shared"
)

var ListPhoneNumberCountryServers = []string{
	"https://pricing.twilio.com",
}

type ListPhoneNumberCountryQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListPhoneNumberCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListPhoneNumberCountryRequest struct {
	ServerURL   *string
	QueryParams ListPhoneNumberCountryQueryParams
	Security    ListPhoneNumberCountrySecurity
}

type ListPhoneNumberCountry200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListPhoneNumberCountry200ApplicationJSONListPhoneNumberCountryResponse struct {
	Countries []shared.PricingV1PhoneNumberPhoneNumberCountry `json:"countries"`
	Meta      *ListPhoneNumberCountry200ApplicationJSONMeta   `json:"meta"`
}

type ListPhoneNumberCountryResponse struct {
	ContentType                    string
	ListPhoneNumberCountryResponse *ListPhoneNumberCountry200ApplicationJSONListPhoneNumberCountryResponse
	StatusCode                     int64
}
