package operations

import (
	"openapi/pkg/models/shared"
)

var ListRecordingTranscriptionServers = []string{
	"https://api.twilio.com",
}

type ListRecordingTranscriptionPathParams struct {
	AccountSid   string `pathParam:"style=simple,explode=false,name=AccountSid"`
	RecordingSid string `pathParam:"style=simple,explode=false,name=RecordingSid"`
}

type ListRecordingTranscriptionQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListRecordingTranscriptionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRecordingTranscriptionRequest struct {
	ServerURL   *string
	PathParams  ListRecordingTranscriptionPathParams
	QueryParams ListRecordingTranscriptionQueryParams
	Security    ListRecordingTranscriptionSecurity
}

type ListRecordingTranscription200ApplicationJSONListRecordingTranscriptionResponse struct {
	End             *int64                                                  `json:"end,omitempty"`
	FirstPageURI    *string                                                 `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                 `json:"next_page_uri,omitempty"`
	Page            *int64                                                  `json:"page,omitempty"`
	PageSize        *int64                                                  `json:"page_size,omitempty"`
	PreviousPageURI *string                                                 `json:"previous_page_uri,omitempty"`
	Start           *int64                                                  `json:"start,omitempty"`
	Transcriptions  []shared.APIV2010AccountRecordingRecordingTranscription `json:"transcriptions,omitempty"`
	URI             *string                                                 `json:"uri,omitempty"`
}

type ListRecordingTranscriptionResponse struct {
	ContentType                        string
	ListRecordingTranscriptionResponse *ListRecordingTranscription200ApplicationJSONListRecordingTranscriptionResponse
	StatusCode                         int64
}
