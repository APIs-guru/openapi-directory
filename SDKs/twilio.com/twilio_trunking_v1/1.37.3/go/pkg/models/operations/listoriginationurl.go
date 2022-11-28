package operations

import (
	"openapi/pkg/models/shared"
)

var ListOriginationURLServerList = []string{
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

type ListOriginationURLListOriginationURLResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListOriginationURLListOriginationURLResponse struct {
	Meta            *ListOriginationURLListOriginationURLResponseMeta `json:"meta,omitempty"`
	OriginationUrls []shared.TrunkingV1TrunkOriginationURL            `json:"origination_urls,omitempty"`
}

type ListOriginationURLRequest struct {
	ServerURL   *string
	PathParams  ListOriginationURLPathParams
	QueryParams ListOriginationURLQueryParams
	Security    ListOriginationURLSecurity
}

type ListOriginationURLResponse struct {
	ContentType                string
	ListOriginationURLResponse *ListOriginationURLListOriginationURLResponse
	StatusCode                 int64
}
