package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListAccountUsageRecordServerList = []string{
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

type ListAccountUsageRecordListAccountUsageRecordResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListAccountUsageRecordListAccountUsageRecordResponse struct {
	Meta         *ListAccountUsageRecordListAccountUsageRecordResponseMeta `json:"meta,omitempty"`
	UsageRecords []shared.WirelessV1AccountUsageRecord                     `json:"usage_records,omitempty"`
}

type ListAccountUsageRecordRequest struct {
	ServerURL   *string
	QueryParams ListAccountUsageRecordQueryParams
	Security    ListAccountUsageRecordSecurity
}

type ListAccountUsageRecordResponse struct {
	ContentType                    string
	ListAccountUsageRecordResponse *ListAccountUsageRecordListAccountUsageRecordResponse
	StatusCode                     int64
}
