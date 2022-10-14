package operations

import (
	"openapi/pkg/models/shared"
)

var ListRatePlanServers = []string{
	"https://wireless.twilio.com",
}

type ListRatePlanQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRatePlanRequest struct {
	ServerURL   *string
	QueryParams ListRatePlanQueryParams
	Security    ListRatePlanSecurity
}

type ListRatePlan200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRatePlan200ApplicationJSONListRatePlanResponse struct {
	Meta      *ListRatePlan200ApplicationJSONMeta `json:"meta,omitempty"`
	RatePlans []shared.WirelessV1RatePlan         `json:"rate_plans,omitempty"`
}

type ListRatePlanResponse struct {
	ContentType          string
	ListRatePlanResponse *ListRatePlan200ApplicationJSONListRatePlanResponse
	StatusCode           int64
}
