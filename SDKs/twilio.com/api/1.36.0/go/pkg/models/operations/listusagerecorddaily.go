package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordDailyServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordDailyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordDailyQueryParams struct {
	Category           *shared.UsageRecordDailyEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                               `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                    `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                   `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                               `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordDailySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordDailyRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordDailyPathParams
	QueryParams ListUsageRecordDailyQueryParams
	Security    ListUsageRecordDailySecurity
}

type ListUsageRecordDaily200ApplicationJSONListUsageRecordDailyResponse struct {
	End             *int64                                                   `json:"end"`
	FirstPageURI    *string                                                  `json:"first_page_uri"`
	NextPageURI     *string                                                  `json:"next_page_uri"`
	Page            *int64                                                   `json:"page"`
	PageSize        *int64                                                   `json:"page_size"`
	PreviousPageURI *string                                                  `json:"previous_page_uri"`
	Start           *int64                                                   `json:"start"`
	URI             *string                                                  `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordDaily `json:"usage_records"`
}

type ListUsageRecordDailyResponse struct {
	ContentType                  string
	ListUsageRecordDailyResponse *ListUsageRecordDaily200ApplicationJSONListUsageRecordDailyResponse
	StatusCode                   int64
}
