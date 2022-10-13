package operations

import (
	"openapi/pkg/models/shared"
)

var ListIPRecordServers = []string{
	"https://voice.twilio.com",
}

type ListIPRecordQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListIPRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListIPRecordRequest struct {
	ServerURL   *string
	QueryParams ListIPRecordQueryParams
	Security    ListIPRecordSecurity
}

type ListIPRecord200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListIPRecord200ApplicationJSONListIPRecordResponse struct {
	IPRecords []shared.VoiceV1IPRecord            `json:"ip_records"`
	Meta      *ListIPRecord200ApplicationJSONMeta `json:"meta"`
}

type ListIPRecordResponse struct {
	ContentType          string
	ListIPRecordResponse *ListIPRecord200ApplicationJSONListIPRecordResponse
	StatusCode           int64
}
