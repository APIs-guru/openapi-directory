package operations

import (
	"openapi/pkg/models/shared"
)

var ListInviteServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListInvitePathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListInviteQueryParams struct {
	Identity []string `queryParam:"style=form,explode=true,name=Identity"`
	PageSize *int64   `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListInviteSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListInviteRequest struct {
	ServerURL   *string
	PathParams  ListInvitePathParams
	QueryParams ListInviteQueryParams
	Security    ListInviteSecurity
}

type ListInvite200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListInvite200ApplicationJSONListInviteResponse struct {
	Invites []shared.IPMessagingV1ServiceChannelInvite `json:"invites"`
	Meta    *ListInvite200ApplicationJSONMeta          `json:"meta"`
}

type ListInviteResponse struct {
	ContentType        string
	ListInviteResponse *ListInvite200ApplicationJSONListInviteResponse
	StatusCode         int64
}
