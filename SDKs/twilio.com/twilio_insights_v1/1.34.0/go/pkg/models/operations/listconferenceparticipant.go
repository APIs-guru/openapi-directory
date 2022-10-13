package operations

import (
	"openapi/pkg/models/shared"
)

var ListConferenceParticipantServers = []string{
	"https://insights.twilio.com",
}

type ListConferenceParticipantPathParams struct {
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type ListConferenceParticipantQueryParams struct {
	Events         *string `queryParam:"style=form,explode=true,name=Events"`
	Label          *string `queryParam:"style=form,explode=true,name=Label"`
	PageSize       *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	ParticipantSid *string `queryParam:"style=form,explode=true,name=ParticipantSid"`
}

type ListConferenceParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConferenceParticipantRequest struct {
	ServerURL   *string
	PathParams  ListConferenceParticipantPathParams
	QueryParams ListConferenceParticipantQueryParams
	Security    ListConferenceParticipantSecurity
}

type ListConferenceParticipant200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListConferenceParticipant200ApplicationJSONListConferenceParticipantResponse struct {
	Meta         *ListConferenceParticipant200ApplicationJSONMeta   `json:"meta"`
	Participants []shared.InsightsV1ConferenceConferenceParticipant `json:"participants"`
}

type ListConferenceParticipantResponse struct {
	ContentType                       string
	ListConferenceParticipantResponse *ListConferenceParticipant200ApplicationJSONListConferenceParticipantResponse
	StatusCode                        int64
}
