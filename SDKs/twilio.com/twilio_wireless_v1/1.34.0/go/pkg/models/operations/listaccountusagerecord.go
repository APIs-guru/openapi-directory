package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListAccountUsageRecordServers = []string{
	"https://wireless.twilio.com",
}

type ListAccountUsageRecordQueryParams struct {
	End         *time.Time                                    `queryParam:"style=form,explode=true,name=End"`
	Granularity *shared.AccountUsageRecordEnumGranularityEnum `queryParam:"style=form,explode=true,name=Granularity"`
	PageSize    *int64                                        `queryParam:"style=form,explode=true,name=PageSize"`
	Start       *time.Time                                    `queryParam:"style=form,explode=true,name=Start"`
}

type ListAccountUsageRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAccountUsageRecordRequest struct {
	ServerURL   *string
	QueryParams ListAccountUsageRecordQueryParams
	Security    ListAccountUsageRecordSecurity
}

type ListAccountUsageRecord200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListAccountUsageRecord200ApplicationJSONListAccountUsageRecordResponse struct {
	Meta         *ListAccountUsageRecord200ApplicationJSONMeta `json:"meta"`
	UsageRecords []shared.WirelessV1AccountUsageRecord         `json:"usage_records"`
}

type ListAccountUsageRecordResponse struct {
	ContentType                    string
	ListAccountUsageRecordResponse *ListAccountUsageRecord200ApplicationJSONListAccountUsageRecordResponse
	StatusCode                     int64
}
