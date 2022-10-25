package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordServers = []string{
	"https://supersim.twilio.com",
}

type ListUsageRecordQueryParams struct {
	EndTime     *time.Time                             `queryParam:"style=form,explode=true,name=EndTime"`
	Fleet       *string                                `queryParam:"style=form,explode=true,name=Fleet"`
	Granularity *shared.UsageRecordEnumGranularityEnum `queryParam:"style=form,explode=true,name=Granularity"`
	Group       *shared.UsageRecordEnumGroupEnum       `queryParam:"style=form,explode=true,name=Group"`
	IsoCountry  *string                                `queryParam:"style=form,explode=true,name=IsoCountry"`
	Network     *string                                `queryParam:"style=form,explode=true,name=Network"`
	PageSize    *int64                                 `queryParam:"style=form,explode=true,name=PageSize"`
	Sim         *string                                `queryParam:"style=form,explode=true,name=Sim"`
	StartTime   *time.Time                             `queryParam:"style=form,explode=true,name=StartTime"`
}

type ListUsageRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordRequest struct {
	ServerURL   *string
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
	UsageRecords []shared.SupersimV1UsageRecord              `json:"usage_records,omitempty"`
}

type ListUsageRecordResponse struct {
	ContentType             string
	ListUsageRecordResponse *ListUsageRecordListUsageRecordResponse
	StatusCode              int64
}
