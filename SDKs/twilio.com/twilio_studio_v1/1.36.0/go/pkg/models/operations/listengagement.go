package operations

import (
	"openapi/pkg/models/shared"
)

var ListEngagementServers = []string{
	"https://studio.twilio.com",
}

type ListEngagementPathParams struct {
	FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
}

type ListEngagementQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListEngagementSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListEngagementRequest struct {
	ServerURL   *string
	PathParams  ListEngagementPathParams
	QueryParams ListEngagementQueryParams
	Security    ListEngagementSecurity
}

type ListEngagement200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListEngagement200ApplicationJSONListEngagementResponse struct {
	Engagements []shared.StudioV1FlowEngagement       `json:"engagements"`
	Meta        *ListEngagement200ApplicationJSONMeta `json:"meta"`
}

type ListEngagementResponse struct {
	ContentType            string
	ListEngagementResponse *ListEngagement200ApplicationJSONListEngagementResponse
	StatusCode             int64
}
