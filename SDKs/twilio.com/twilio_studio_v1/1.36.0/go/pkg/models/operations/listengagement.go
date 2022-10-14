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
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEngagement200ApplicationJSONListEngagementResponse struct {
	Engagements []shared.StudioV1FlowEngagement       `json:"engagements,omitempty"`
	Meta        *ListEngagement200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListEngagementResponse struct {
	ContentType            string
	ListEngagementResponse *ListEngagement200ApplicationJSONListEngagementResponse
	StatusCode             int64
}
