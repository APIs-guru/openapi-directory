package operations

import (
	"openapi/pkg/models/shared"
)

var ListInviteServers = []string{
	"https://chat.twilio.com",
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

type ListInviteListInviteResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListInviteListInviteResponse struct {
	Invites []shared.ChatV1ServiceChannelInvite `json:"invites,omitempty"`
	Meta    *ListInviteListInviteResponseMeta   `json:"meta,omitempty"`
}

type ListInviteResponse struct {
	ContentType        string
	ListInviteResponse *ListInviteListInviteResponse
	StatusCode         int64
}
