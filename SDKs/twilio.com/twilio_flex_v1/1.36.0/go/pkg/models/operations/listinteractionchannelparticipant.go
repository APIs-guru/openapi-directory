package operations

import (
	"openapi/pkg/models/shared"
)

var ListInteractionChannelParticipantServers = []string{
	"https://flex-api.twilio.com",
}

type ListInteractionChannelParticipantPathParams struct {
	ChannelSid     string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	InteractionSid string `pathParam:"style=simple,explode=false,name=InteractionSid"`
}

type ListInteractionChannelParticipantQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListInteractionChannelParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListInteractionChannelParticipantRequest struct {
	ServerURL   *string
	PathParams  ListInteractionChannelParticipantPathParams
	QueryParams ListInteractionChannelParticipantQueryParams
	Security    ListInteractionChannelParticipantSecurity
}

type ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListInteractionChannelParticipantListInteractionChannelParticipantResponse struct {
	Meta         *ListInteractionChannelParticipantListInteractionChannelParticipantResponseMeta `json:"meta,omitempty"`
	Participants []shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant       `json:"participants,omitempty"`
}

type ListInteractionChannelParticipantResponse struct {
	ContentType                               string
	ListInteractionChannelParticipantResponse *ListInteractionChannelParticipantListInteractionChannelParticipantResponse
	StatusCode                                int64
}
