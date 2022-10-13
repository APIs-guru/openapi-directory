package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordYesterdayServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordYesterdayPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordYesterdayQueryParams struct {
	Category           *shared.UsageRecordYesterdayEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                                   `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                        `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                       `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                                   `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordYesterdaySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordYesterdayRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordYesterdayPathParams
	QueryParams ListUsageRecordYesterdayQueryParams
	Security    ListUsageRecordYesterdaySecurity
}

type ListUsageRecordYesterday200ApplicationJSONListUsageRecordYesterdayResponse struct {
	End             *int64                                                       `json:"end"`
	FirstPageURI    *string                                                      `json:"first_page_uri"`
	NextPageURI     *string                                                      `json:"next_page_uri"`
	Page            *int64                                                       `json:"page"`
	PageSize        *int64                                                       `json:"page_size"`
	PreviousPageURI *string                                                      `json:"previous_page_uri"`
	Start           *int64                                                       `json:"start"`
	URI             *string                                                      `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordYesterday `json:"usage_records"`
}

type ListUsageRecordYesterdayResponse struct {
	ContentType                      string
	ListUsageRecordYesterdayResponse *ListUsageRecordYesterday200ApplicationJSONListUsageRecordYesterdayResponse
	StatusCode                       int64
}
