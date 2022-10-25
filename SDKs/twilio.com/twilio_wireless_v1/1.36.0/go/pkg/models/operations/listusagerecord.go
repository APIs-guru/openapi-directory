package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordServers = []string{
	"https://wireless.twilio.com",
}

type ListUsageRecordPathParams struct {
	SimSid string `pathParam:"style=simple,explode=false,name=SimSid"`
}

type ListUsageRecordQueryParams struct {
	End         *time.Time                             `queryParam:"style=form,explode=true,name=End"`
	Granularity *shared.UsageRecordEnumGranularityEnum `queryParam:"style=form,explode=true,name=Granularity"`
	PageSize    *int64                                 `queryParam:"style=form,explode=true,name=PageSize"`
	Start       *time.Time                             `queryParam:"style=form,explode=true,name=Start"`
}

type ListUsageRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordPathParams
	QueryParams ListUsageRecordQueryParams
	Security    ListUsageRecordSecurity
}

type ListUsageRecordListUsageRecordResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListUsageRecordListUsageRecordResponse struct {
	Meta         *ListUsageRecordListUsageRecordResponseMeta `json:"meta,omitempty"`
	UsageRecords []shared.WirelessV1SimUsageRecord           `json:"usage_records,omitempty"`
}

type ListUsageRecordResponse struct {
	ContentType             string
	ListUsageRecordResponse *ListUsageRecordListUsageRecordResponse
	StatusCode              int64
}
