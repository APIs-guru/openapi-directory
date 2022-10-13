package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordMonthlyServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordMonthlyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordMonthlyQueryParams struct {
	Category           *shared.UsageRecordMonthlyEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                                 `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                      `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                     `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                                 `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordMonthlySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordMonthlyRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordMonthlyPathParams
	QueryParams ListUsageRecordMonthlyQueryParams
	Security    ListUsageRecordMonthlySecurity
}

type ListUsageRecordMonthly200ApplicationJSONListUsageRecordMonthlyResponse struct {
	End             *int64                                                     `json:"end"`
	FirstPageURI    *string                                                    `json:"first_page_uri"`
	NextPageURI     *string                                                    `json:"next_page_uri"`
	Page            *int64                                                     `json:"page"`
	PageSize        *int64                                                     `json:"page_size"`
	PreviousPageURI *string                                                    `json:"previous_page_uri"`
	Start           *int64                                                     `json:"start"`
	URI             *string                                                    `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordMonthly `json:"usage_records"`
}

type ListUsageRecordMonthlyResponse struct {
	ContentType                    string
	ListUsageRecordMonthlyResponse *ListUsageRecordMonthly200ApplicationJSONListUsageRecordMonthlyResponse
	StatusCode                     int64
}
