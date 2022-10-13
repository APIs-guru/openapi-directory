package operations

import (
	"openapi/pkg/models/shared"
)

var ListInteractionChannelInviteServers = []string{
	"https://flex-api.twilio.com",
}

type ListInteractionChannelInvitePathParams struct {
	ChannelSid     string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
}

type ListInteractionChannelInviteQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListInteractionChannelInviteSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListInteractionChannelInviteRequest struct {
	ServerURL   *string
	PathParams  ListInteractionChannelInvitePathParams
	QueryParams ListInteractionChannelInviteQueryParams
	Security    ListInteractionChannelInviteSecurity
}

type ListInteractionChannelInvite200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListInteractionChannelInvite200ApplicationJSONListInteractionChannelInviteResponse struct {
	Invites []shared.FlexV1InteractionInteractionChannelInteractionChannelInvite `json:"invites"`
	Meta    *ListInteractionChannelInvite200ApplicationJSONMeta                  `json:"meta"`
}

type ListInteractionChannelInviteResponse struct {
	ContentType                          string
	ListInteractionChannelInviteResponse *ListInteractionChannelInvite200ApplicationJSONListInteractionChannelInviteResponse
	StatusCode                           int64
}
