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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRateLimit200ApplicationJSONListRateLimitResponse struct {
	Meta       *ListRateLimit200ApplicationJSONMeta `json:"meta"`
	RateLimits []shared.VerifyV2ServiceRateLimit    `json:"rate_limits"`
}

type ListRateLimitResponse struct {
	ContentType           string
	ListRateLimitResponse *ListRateLimit200ApplicationJSONListRateLimitResponse
	StatusCode            int64
}
