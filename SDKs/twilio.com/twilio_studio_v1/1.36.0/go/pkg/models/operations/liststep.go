package operations

import (
	"openapi/pkg/models/shared"
)

var ListStepServers = []string{
	"https://studio.twilio.com",
}

type ListStepPathParams struct {
	EngagementSid string `pathParam:"style=simple,explode=false,name=EngagementSid"`
	FlowSid       string `pathParam:"style=simple,explode=false,name=FlowSid"`
}

type ListStepQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListStepSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListStepRequest struct {
	ServerURL   *string
	PathParams  ListStepPathParams
	QueryParams ListStepQueryParams
	Security    ListStepSecurity
}

type ListStep200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListStep200ApplicationJSONListStepResponse struct {
	Meta  *ListStep200ApplicationJSONMeta     `json:"meta,omitempty"`
	Steps []shared.StudioV1FlowEngagementStep `json:"steps,omitempty"`
}

type ListStepResponse struct {
	ContentType      string
	ListStepResponse *ListStep200ApplicationJSONListStepResponse
	StatusCode       int64
}
