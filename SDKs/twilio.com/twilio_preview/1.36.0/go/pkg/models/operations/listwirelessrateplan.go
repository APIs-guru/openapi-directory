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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListWirelessRatePlan200ApplicationJSONListWirelessRatePlanResponse struct {
	Meta      *ListWirelessRatePlan200ApplicationJSONMeta `json:"meta,omitempty"`
	RatePlans []shared.PreviewWirelessRatePlan            `json:"rate_plans,omitempty"`
}

type ListWirelessRatePlanResponse struct {
	ContentType                  string
	ListWirelessRatePlanResponse *ListWirelessRatePlan200ApplicationJSONListWirelessRatePlanResponse
	StatusCode                   int64
}
