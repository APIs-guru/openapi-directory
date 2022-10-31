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

type ListEngagementListEngagementResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListEngagementListEngagementResponse struct {
	Engagements []shared.StudioV1FlowEngagement           `json:"engagements,omitempty"`
	Meta        *ListEngagementListEngagementResponseMeta `json:"meta,omitempty"`
}

type ListEngagementResponse struct {
	ContentType            string
	ListEngagementResponse *ListEngagementListEngagementResponse
	StatusCode             int64
}
