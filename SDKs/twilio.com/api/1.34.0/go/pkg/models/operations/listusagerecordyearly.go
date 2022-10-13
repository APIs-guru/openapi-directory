package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordYearlyServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordYearlyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordYearlyQueryParams struct {
	Category           *shared.UsageRecordYearlyEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                                `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                     `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                    `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                                `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordYearlySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordYearlyRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordYearlyPathParams
	QueryParams ListUsageRecordYearlyQueryParams
	Security    ListUsageRecordYearlySecurity
}

type ListUsageRecordYearly200ApplicationJSONListUsageRecordYearlyResponse struct {
	End             *int64                                                    `json:"end"`
	FirstPageURI    *string                                                   `json:"first_page_uri"`
	NextPageURI     *string                                                   `json:"next_page_uri"`
	Page            *int64                                                    `json:"page"`
	PageSize        *int64                                                    `json:"page_size"`
	PreviousPageURI *string                                                   `json:"previous_page_uri"`
	Start           *int64                                                    `json:"start"`
	URI             *string                                                   `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordYearly `json:"usage_records"`
}

type ListUsageRecordYearlyResponse struct {
	ContentType                   string
	ListUsageRecordYearlyResponse *ListUsageRecordYearly200ApplicationJSONListUsageRecordYearlyResponse
	StatusCode                    int64
}
