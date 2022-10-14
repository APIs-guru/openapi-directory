package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordAllTimeServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordAllTimePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordAllTimeQueryParams struct {
	Category           *shared.UsageRecordAllTimeEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                                 `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                                      `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                                     `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                                 `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordAllTimeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordAllTimeRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordAllTimePathParams
	QueryParams ListUsageRecordAllTimeQueryParams
	Security    ListUsageRecordAllTimeSecurity
}

type ListUsageRecordAllTime200ApplicationJSONListUsageRecordAllTimeResponse struct {
	End             *int64                                                     `json:"end,omitempty"`
	FirstPageURI    *string                                                    `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                    `json:"next_page_uri,omitempty"`
	Page            *int64                                                     `json:"page,omitempty"`
	PageSize        *int64                                                     `json:"page_size,omitempty"`
	PreviousPageURI *string                                                    `json:"previous_page_uri,omitempty"`
	Start           *int64                                                     `json:"start,omitempty"`
	URI             *string                                                    `json:"uri,omitempty"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordAllTime `json:"usage_records,omitempty"`
}

type ListUsageRecordAllTimeResponse struct {
	ContentType                    string
	ListUsageRecordAllTimeResponse *ListUsageRecordAllTime200ApplicationJSONListUsageRecordAllTimeResponse
	StatusCode                     int64
}
