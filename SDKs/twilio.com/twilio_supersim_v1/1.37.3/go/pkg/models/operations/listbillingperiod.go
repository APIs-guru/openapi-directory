package operations

import (
	"openapi/pkg/models/shared"
)

var ListBillingPeriodServerList = []string{
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

type ListBillingPeriodListBillingPeriodResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListBillingPeriodListBillingPeriodResponse struct {
	BillingPeriods []shared.SupersimV1SimBillingPeriod             `json:"billing_periods,omitempty"`
	Meta           *ListBillingPeriodListBillingPeriodResponseMeta `json:"meta,omitempty"`
}

type ListBillingPeriodRequest struct {
	ServerURL   *string
	PathParams  ListBillingPeriodPathParams
	QueryParams ListBillingPeriodQueryParams
	Security    ListBillingPeriodSecurity
}

type ListBillingPeriodResponse struct {
	ContentType               string
	ListBillingPeriodResponse *ListBillingPeriodListBillingPeriodResponse
	StatusCode                int64
}
