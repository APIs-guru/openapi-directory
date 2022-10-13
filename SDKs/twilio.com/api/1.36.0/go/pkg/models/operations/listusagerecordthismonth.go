package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordThisMonthServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordThisMonthPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordThisMonthQueryParams struct {
	Category           *shared.UsageRecordThisMonthEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                                   `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                        `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                       `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                                   `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordThisMonthSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordThisMonthRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordThisMonthPathParams
	QueryParams ListUsageRecordThisMonthQueryParams
	Security    ListUsageRecordThisMonthSecurity
}

type ListUsageRecordThisMonth200ApplicationJSONListUsageRecordThisMonthResponse struct {
	End             *int64                                                       `json:"end"`
	FirstPageURI    *string                                                      `json:"first_page_uri"`
	NextPageURI     *string                                                      `json:"next_page_uri"`
	Page            *int64                                                       `json:"page"`
	PageSize        *int64                                                       `json:"page_size"`
	PreviousPageURI *string                                                      `json:"previous_page_uri"`
	Start           *int64                                                       `json:"start"`
	URI             *string                                                      `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordThisMonth `json:"usage_records"`
}

type ListUsageRecordThisMonthResponse struct {
	ContentType                      string
	ListUsageRecordThisMonthResponse *ListUsageRecordThisMonth200ApplicationJSONListUsageRecordThisMonthResponse
	StatusCode                       int64
}
