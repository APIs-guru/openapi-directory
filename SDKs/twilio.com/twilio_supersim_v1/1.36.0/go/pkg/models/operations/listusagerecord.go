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

type ListUsageRecord200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListUsageRecord200ApplicationJSONListUsageRecordResponse struct {
	Meta         *ListUsageRecord200ApplicationJSONMeta `json:"meta"`
	UsageRecords []shared.SupersimV1UsageRecord         `json:"usage_records"`
}

type ListUsageRecordResponse struct {
	ContentType             string
	ListUsageRecordResponse *ListUsageRecord200ApplicationJSONListUsageRecordResponse
	StatusCode              int64
}
