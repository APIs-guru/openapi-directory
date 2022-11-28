package operations

import (
	"openapi/pkg/models/shared"
)

var ListInteractionChannelInviteServerList = []string{
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

type ListInteractionChannelInviteListInteractionChannelInviteResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListInteractionChannelInviteListInteractionChannelInviteResponse struct {
	Invites []shared.FlexV1InteractionInteractionChannelInteractionChannelInvite  `json:"invites,omitempty"`
	Meta    *ListInteractionChannelInviteListInteractionChannelInviteResponseMeta `json:"meta,omitempty"`
}

type ListInteractionChannelInviteRequest struct {
	ServerURL   *string
	PathParams  ListInteractionChannelInvitePathParams
	QueryParams ListInteractionChannelInviteQueryParams
	Security    ListInteractionChannelInviteSecurity
}

type ListInteractionChannelInviteResponse struct {
	ContentType                          string
	ListInteractionChannelInviteResponse *ListInteractionChannelInviteListInteractionChannelInviteResponse
	StatusCode                           int64
}
