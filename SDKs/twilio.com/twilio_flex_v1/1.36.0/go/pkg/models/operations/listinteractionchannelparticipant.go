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

type ListInteractionChannelParticipant200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListInteractionChannelParticipant200ApplicationJSONListInteractionChannelParticipantResponse struct {
	Meta         *ListInteractionChannelParticipant200ApplicationJSONMeta                  `json:"meta"`
	Participants []shared.FlexV1InteractionInteractionChannelInteractionChannelParticipant `json:"participants"`
}

type ListInteractionChannelParticipantResponse struct {
	ContentType                               string
	ListInteractionChannelParticipantResponse *ListInteractionChannelParticipant200ApplicationJSONListInteractionChannelParticipantResponse
	StatusCode                                int64
}
