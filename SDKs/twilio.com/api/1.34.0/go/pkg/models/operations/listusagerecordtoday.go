package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordTodayServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordTodayPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordTodayQueryParams struct {
	Category           *shared.UsageRecordTodayEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                               `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                    `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                   `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                               `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordTodaySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordTodayRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordTodayPathParams
	QueryParams ListUsageRecordTodayQueryParams
	Security    ListUsageRecordTodaySecurity
}

type ListUsageRecordToday200ApplicationJSONListUsageRecordTodayResponse struct {
	End             *int64                                                   `json:"end"`
	FirstPageURI    *string                                                  `json:"first_page_uri"`
	NextPageURI     *string                                                  `json:"next_page_uri"`
	Page            *int64                                                   `json:"page"`
	PageSize        *int64                                                   `json:"page_size"`
	PreviousPageURI *string                                                  `json:"previous_page_uri"`
	Start           *int64                                                   `json:"start"`
	URI             *string                                                  `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordToday `json:"usage_records"`
}

type ListUsageRecordTodayResponse struct {
	ContentType                  string
	ListUsageRecordTodayResponse *ListUsageRecordToday200ApplicationJSONListUsageRecordTodayResponse
	StatusCode                   int64
}
