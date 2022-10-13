package operations

import (
	"openapi/pkg/models/shared"
)

var ListOriginationURLServers = []string{
	"https://trunking.twilio.com",
}

type ListOriginationURLPathParams struct {
	TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
}

type ListOriginationURLQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListOriginationURLSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListOriginationURLRequest struct {
	ServerURL   *string
	PathParams  ListOriginationURLPathParams
	QueryParams ListOriginationURLQueryParams
	Security    ListOriginationURLSecurity
}

type ListOriginationURL200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListOriginationURL200ApplicationJSONListOriginationURLResponse struct {
	Meta            *ListOriginationURL200ApplicationJSONMeta `json:"meta"`
	OriginationUrls []shared.TrunkingV1TrunkOriginationURL    `json:"origination_urls"`
}

type ListOriginationURLResponse struct {
	ContentType                string
	ListOriginationURLResponse *ListOriginationURL200ApplicationJSONListOriginationURLResponse
	StatusCode                 int64
}
