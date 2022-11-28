package operations

import (
	"openapi/pkg/models/shared"
)

var ListConferenceParticipantServerList = []string{
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

type ListConferenceParticipantListConferenceParticipantResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConferenceParticipantListConferenceParticipantResponse struct {
	Meta         *ListConferenceParticipantListConferenceParticipantResponseMeta `json:"meta,omitempty"`
	Participants []shared.InsightsV1ConferenceConferenceParticipant              `json:"participants,omitempty"`
}

type ListConferenceParticipantRequest struct {
	ServerURL   *string
	PathParams  ListConferenceParticipantPathParams
	QueryParams ListConferenceParticipantQueryParams
	Security    ListConferenceParticipantSecurity
}

type ListConferenceParticipantResponse struct {
	ContentType                       string
	ListConferenceParticipantResponse *ListConferenceParticipantListConferenceParticipantResponse
	StatusCode                        int64
}
