package operations

import (
	"openapi/pkg/models/shared"
)

var ListBillingPeriodServers = []string{
	"https://supersim.twilio.com",
}

type ListBillingPeriodPathParams struct {
	SimSid string `pathParam:"style=simple,explode=false,name=SimSid"`
}

type ListBillingPeriodQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListBillingPeriodSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListBillingPeriodRequest struct {
	ServerURL   *string
	PathParams  ListBillingPeriodPathParams
	QueryParams ListBillingPeriodQueryParams
	Security    ListBillingPeriodSecurity
}

type ListBillingPeriod200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListBillingPeriod200ApplicationJSONListBillingPeriodResponse struct {
	BillingPeriods []shared.SupersimV1SimBillingPeriod      `json:"billing_periods"`
	Meta           *ListBillingPeriod200ApplicationJSONMeta `json:"meta"`
}

type ListBillingPeriodResponse struct {
	ContentType               string
	ListBillingPeriodResponse *ListBillingPeriod200ApplicationJSONListBillingPeriodResponse
	StatusCode                int64
}
