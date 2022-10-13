package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListRecordingServers = []string{
	"https://video.twilio.com",
}

type ListRecordingQueryParams struct {
	DateCreatedAfter  *time.Time                      `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
	DateCreatedBefore *time.Time                      `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
	GroupingSid       []string                        `queryParam:"style=form,explode=true,name=GroupingSid"`
	MediaType         *shared.RecordingEnumTypeEnum   `queryParam:"style=form,explode=true,name=MediaType"`
	PageSize          *int64                          `queryParam:"style=form,explode=true,name=PageSize"`
	SourceSid         *string                         `queryParam:"style=form,explode=true,name=SourceSid"`
	Status            *shared.RecordingEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListRecordingRequest struct {
	ServerURL   *string
	QueryParams ListRecordingQueryParams
	Security    ListRecordingSecurity
}

type ListRecording200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListRecording200ApplicationJSONListRecordingResponse struct {
	Meta       *ListRecording200ApplicationJSONMeta `json:"meta"`
	Recordings []shared.VideoV1Recording            `json:"recordings"`
}

type ListRecordingResponse struct {
	ContentType           string
	ListRecordingResponse *ListRecording200ApplicationJSONListRecordingResponse
	StatusCode            int64
}
