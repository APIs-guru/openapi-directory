package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordLastMonthServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordLastMonthPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordLastMonthQueryParams struct {
	Category           *shared.UsageRecordLastMonthEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                                   `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                        `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                       `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                                   `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordLastMonthSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordLastMonthRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordLastMonthPathParams
	QueryParams ListUsageRecordLastMonthQueryParams
	Security    ListUsageRecordLastMonthSecurity
}

type ListUsageRecordLastMonth200ApplicationJSONListUsageRecordLastMonthResponse struct {
	End             *int64                                                       `json:"end"`
	FirstPageURI    *string                                                      `json:"first_page_uri"`
	NextPageURI     *string                                                      `json:"next_page_uri"`
	Page            *int64                                                       `json:"page"`
	PageSize        *int64                                                       `json:"page_size"`
	PreviousPageURI *string                                                      `json:"previous_page_uri"`
	Start           *int64                                                       `json:"start"`
	URI             *string                                                      `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordLastMonth `json:"usage_records"`
}

type ListUsageRecordLastMonthResponse struct {
	ContentType                      string
	ListUsageRecordLastMonthResponse *ListUsageRecordLastMonth200ApplicationJSONListUsageRecordLastMonthResponse
	StatusCode                       int64
}
