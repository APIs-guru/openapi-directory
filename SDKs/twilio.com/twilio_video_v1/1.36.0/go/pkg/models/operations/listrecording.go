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

type ListRecordingListRecordingResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListRecordingListRecordingResponse struct {
	Meta       *ListRecordingListRecordingResponseMeta `json:"meta,omitempty"`
	Recordings []shared.VideoV1Recording               `json:"recordings,omitempty"`
}

type ListRecordingResponse struct {
	ContentType           string
	ListRecordingResponse *ListRecordingListRecordingResponse
	StatusCode            int64
}
