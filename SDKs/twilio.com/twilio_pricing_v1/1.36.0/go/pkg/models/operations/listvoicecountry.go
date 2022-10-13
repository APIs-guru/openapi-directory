package operations

import (
	"openapi/pkg/models/shared"
)

var ListVoiceCountryServers = []string{
	"https://pricing.twilio.com",
}

type ListVoiceCountryQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListVoiceCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListVoiceCountryRequest struct {
	ServerURL   *string
	QueryParams ListVoiceCountryQueryParams
	Security    ListVoiceCountrySecurity
}

type ListVoiceCountry200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListVoiceCountry200ApplicationJSONListVoiceCountryResponse struct {
	Countries []shared.PricingV1VoiceVoiceCountry     `json:"countries"`
	Meta      *ListVoiceCountry200ApplicationJSONMeta `json:"meta"`
}

type ListVoiceCountryResponse struct {
	ContentType              string
	ListVoiceCountryResponse *ListVoiceCountry200ApplicationJSONListVoiceCountryResponse
	StatusCode               int64
}
