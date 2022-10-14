package operations

import (
	"openapi/pkg/models/shared"
)

var ListParticipantServers = []string{
	"https://api.twilio.com",
}

type ListParticipantPathParams struct {
	AccountSid    string `pathParam:"style=simple,explode=false,name=AccountSid"`
	ConferenceSid string `pathParam:"style=simple,explode=false,name=ConferenceSid"`
}

type ListParticipantQueryParams struct {
	Coaching *bool  `queryParam:"style=form,explode=true,name=Coaching"`
	Hold     *bool  `queryParam:"style=form,explode=true,name=Hold"`
	Muted    *bool  `queryParam:"style=form,explode=true,name=Muted"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListParticipantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListParticipantRequest struct {
	ServerURL   *string
	PathParams  ListParticipantPathParams
	QueryParams ListParticipantQueryParams
	Security    ListParticipantSecurity
}

type ListParticipant200ApplicationJSONListParticipantResponse struct {
	End             *int64                                        `json:"end,omitempty"`
	FirstPageURI    *string                                       `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                       `json:"next_page_uri,omitempty"`
	Page            *int64                                        `json:"page,omitempty"`
	PageSize        *int64                                        `json:"page_size,omitempty"`
	Participants    []shared.APIV2010AccountConferenceParticipant `json:"participants,omitempty"`
	PreviousPageURI *string                                       `json:"previous_page_uri,omitempty"`
	Start           *int64                                        `json:"start,omitempty"`
	URI             *string                                       `json:"uri,omitempty"`
}

type ListParticipantResponse struct {
	ContentType             string
	ListParticipantResponse *ListParticipant200ApplicationJSONListParticipantResponse
	StatusCode              int64
}
