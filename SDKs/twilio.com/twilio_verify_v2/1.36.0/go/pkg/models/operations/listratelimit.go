package operations

import (
	"openapi/pkg/models/shared"
)

var ListRateLimitServers = []string{
	"https://verify.twilio.com",
}

type ListRateLimitPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListRateLimitQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRateLimitSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRateLimitRequest struct {
	ServerURL   *string
	PathParams  ListRateLimitPathParams
	QueryParams ListRateLimitQueryParams
	Security    ListRateLimitSecurity
}

type ListRateLimit200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRateLimit200ApplicationJSONListRateLimitResponse struct {
	Meta       *ListRateLimit200ApplicationJSONMeta `json:"meta,omitempty"`
	RateLimits []shared.VerifyV2ServiceRateLimit    `json:"rate_limits,omitempty"`
}

type ListRateLimitResponse struct {
	ContentType           string
	ListRateLimitResponse *ListRateLimit200ApplicationJSONListRateLimitResponse
	StatusCode            int64
}
