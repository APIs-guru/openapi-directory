package operations

import (
	"openapi/pkg/models/shared"
)

var ListMediaRecordingServers = []string{
	"https://media.twilio.com",
}

type ListMediaRecordingQueryParams struct {
	Order        *shared.MediaRecordingEnumOrderEnum  `queryParam:"style=form,explode=true,name=Order"`
	PageSize     *int64                               `queryParam:"style=form,explode=true,name=PageSize"`
	ProcessorSid *string                              `queryParam:"style=form,explode=true,name=ProcessorSid"`
	SourceSid    *string                              `queryParam:"style=form,explode=true,name=SourceSid"`
	Status       *shared.MediaRecordingEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListMediaRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMediaRecordingRequest struct {
	ServerURL   *string
	QueryParams ListMediaRecordingQueryParams
	Security    ListMediaRecordingSecurity
}

type ListMediaRecording200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMediaRecording200ApplicationJSONListMediaRecordingResponse struct {
	MediaRecordings []shared.MediaV1MediaRecording            `json:"media_recordings"`
	Meta            *ListMediaRecording200ApplicationJSONMeta `json:"meta"`
}

type ListMediaRecordingResponse struct {
	ContentType                string
	ListMediaRecordingResponse *ListMediaRecording200ApplicationJSONListMediaRecordingResponse
	StatusCode                 int64
}
