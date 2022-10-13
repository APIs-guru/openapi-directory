package operations

import (
	"openapi/pkg/models/shared"
)

var ListVideoParticipantSummaryServers = []string{
	"https://insights.twilio.com",
}

type ListVideoParticipantSummaryPathParams struct {
	RoomSid string `pathParam:"style=simple,explode=false,name=RoomSid"`
}

type ListVideoParticipantSummaryQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListVideoParticipantSummarySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListVideoParticipantSummaryRequest struct {
	ServerURL   *string
	PathParams  ListVideoParticipantSummaryPathParams
	QueryParams ListVideoParticipantSummaryQueryParams
	Security    ListVideoParticipantSummarySecurity
}

type ListVideoParticipantSummary200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListVideoParticipantSummary200ApplicationJSONListVideoParticipantSummaryResponse struct {
	Meta         *ListVideoParticipantSummary200ApplicationJSONMeta         `json:"meta"`
	Participants []shared.InsightsV1VideoRoomSummaryVideoParticipantSummary `json:"participants"`
}

type ListVideoParticipantSummaryResponse struct {
	ContentType                         string
	ListVideoParticipantSummaryResponse *ListVideoParticipantSummary200ApplicationJSONListVideoParticipantSummaryResponse
	StatusCode                          int64
}
