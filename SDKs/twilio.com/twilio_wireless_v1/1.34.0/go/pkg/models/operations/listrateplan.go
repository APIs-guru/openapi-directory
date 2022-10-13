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
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRatePlan200ApplicationJSONListRatePlanResponse struct {
	Meta      *ListRatePlan200ApplicationJSONMeta `json:"meta"`
	RatePlans []shared.WirelessV1RatePlan         `json:"rate_plans"`
}

type ListRatePlanResponse struct {
	ContentType          string
	ListRatePlanResponse *ListRatePlan200ApplicationJSONListRatePlanResponse
	StatusCode           int64
}
