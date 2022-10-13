package operations

import (
	"openapi/pkg/models/shared"
)

var ListTrunkingCountryServers = []string{
	"https://pricing.twilio.com",
}

type ListTrunkingCountryQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListTrunkingCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListTrunkingCountryRequest struct {
	ServerURL   *string
	QueryParams ListTrunkingCountryQueryParams
	Security    ListTrunkingCountrySecurity
}

type ListTrunkingCountry200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListTrunkingCountry200ApplicationJSONListTrunkingCountryResponse struct {
	Countries []shared.PricingV2TrunkingCountry          `json:"countries"`
	Meta      *ListTrunkingCountry200ApplicationJSONMeta `json:"meta"`
}

type ListTrunkingCountryResponse struct {
	ContentType                 string
	ListTrunkingCountryResponse *ListTrunkingCountry200ApplicationJSONListTrunkingCountryResponse
	StatusCode                  int64
}
