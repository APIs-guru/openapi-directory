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
	End             *int64                                                    `json:"end,omitempty"`
	FirstPageURI    *string                                                   `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                   `json:"next_page_uri,omitempty"`
	Page            *int64                                                    `json:"page,omitempty"`
	PageSize        *int64                                                    `json:"page_size,omitempty"`
	PreviousPageURI *string                                                   `json:"previous_page_uri,omitempty"`
	Start           *int64                                                    `json:"start,omitempty"`
	URI             *string                                                   `json:"uri,omitempty"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordYearly `json:"usage_records,omitempty"`
}

type ListUsageRecordYearlyResponse struct {
	ContentType                   string
	ListUsageRecordYearlyResponse *ListUsageRecordYearly200ApplicationJSONListUsageRecordYearlyResponse
	StatusCode                    int64
}
