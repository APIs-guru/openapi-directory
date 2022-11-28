package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConferenceParticipantServerList = []string{
	"https://insights.twilio.com",
}

type FetchConferenceParticipantPathParams struct {
	ConferenceSid  string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
	ParticipantSid string `pathParam:"style=simple,explode=false,name=ParticipantSid"`
}

type FetchConferenceParticipantQueryParams struct {
	Events  *string `queryParam:"style=form,explode=true,name=Events"`
	Metrics *string `queryParam:"style=form,explode=true,name=Metrics"`
}

type FetchConferenceParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConferenceParticipantRequest struct {
	ServerURL   *string
	PathParams  FetchConferenceParticipantPathParams
	QueryParams FetchConferenceParticipantQueryParams
	Security    FetchConferenceParticipantSecurity
}

type FetchConferenceParticipantResponse struct {
	ContentType                               string
	StatusCode                                int64
	InsightsV1ConferenceConferenceParticipant *shared.InsightsV1ConferenceConferenceParticipant
}
