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

type ListPhoneNumberCountryListPhoneNumberCountryResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListPhoneNumberCountryListPhoneNumberCountryResponse struct {
	Countries []shared.PricingV1PhoneNumberPhoneNumberCountry           `json:"countries,omitempty"`
	Meta      *ListPhoneNumberCountryListPhoneNumberCountryResponseMeta `json:"meta,omitempty"`
}

type ListPhoneNumberCountryResponse struct {
	ContentType                    string
	ListPhoneNumberCountryResponse *ListPhoneNumberCountryListPhoneNumberCountryResponse
	StatusCode                     int64
}
