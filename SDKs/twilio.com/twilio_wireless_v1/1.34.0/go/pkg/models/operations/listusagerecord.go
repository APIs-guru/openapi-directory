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
	UsageRecords []shared.WirelessV1SimUsageRecord      `json:"usage_records"`
}

type ListUsageRecordResponse struct {
	ContentType             string
	ListUsageRecordResponse *ListUsageRecord200ApplicationJSONListUsageRecordResponse
	StatusCode              int64
}
