package operations

import (
	"openapi/pkg/models/shared"
)

var ListWirelessRatePlanServers = []string{
	"https://preview.twilio.com",
}

type ListWirelessRatePlanQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListWirelessRatePlanSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListWirelessRatePlanRequest struct {
	ServerURL   *string
	QueryParams ListWirelessRatePlanQueryParams
	Security    ListWirelessRatePlanSecurity
}

type ListWirelessRatePlan200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListWirelessRatePlan200ApplicationJSONListWirelessRatePlanResponse struct {
	Meta      *ListWirelessRatePlan200ApplicationJSONMeta `json:"meta"`
	RatePlans []shared.PreviewWirelessRatePlan            `json:"rate_plans"`
}

type ListWirelessRatePlanResponse struct {
	ContentType                  string
	ListWirelessRatePlanResponse *ListWirelessRatePlan200ApplicationJSONListWirelessRatePlanResponse
	StatusCode                   int64
}
