package operations

import (
	"openapi/pkg/models/shared"
)

var ListMessagingCountryServerList = []string{
	"https://pricing.twilio.com",
}

type ListMessagingCountryQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMessagingCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMessagingCountryListMessagingCountryResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMessagingCountryListMessagingCountryResponse struct {
	Countries []shared.PricingV1MessagingMessagingCountry           `json:"countries,omitempty"`
	Meta      *ListMessagingCountryListMessagingCountryResponseMeta `json:"meta,omitempty"`
}

type ListMessagingCountryRequest struct {
	ServerURL   *string
	QueryParams ListMessagingCountryQueryParams
	Security    ListMessagingCountrySecurity
}

type ListMessagingCountryResponse struct {
	ContentType                  string
	ListMessagingCountryResponse *ListMessagingCountryListMessagingCountryResponse
	StatusCode                   int64
}
