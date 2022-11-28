package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordThisMonthServerList = []string{
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

type ListUsageRecordThisMonthListUsageRecordThisMonthResponse struct {
	End             *int64                                                       `json:"end,omitempty"`
	FirstPageURI    *string                                                      `json:"first_page_uri,omitempty"`
	NextPageURI     *string                                                      `json:"next_page_uri,omitempty"`
	Page            *int64                                                       `json:"page,omitempty"`
	PageSize        *int64                                                       `json:"page_size,omitempty"`
	PreviousPageURI *string                                                      `json:"previous_page_uri,omitempty"`
	Start           *int64                                                       `json:"start,omitempty"`
	URI             *string                                                      `json:"uri,omitempty"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecordUsageRecordThisMonth `json:"usage_records,omitempty"`
}

type ListUsageRecordThisMonthRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordThisMonthPathParams
	QueryParams ListUsageRecordThisMonthQueryParams
	Security    ListUsageRecordThisMonthSecurity
}

type ListUsageRecordThisMonthResponse struct {
	ContentType                      string
	ListUsageRecordThisMonthResponse *ListUsageRecordThisMonthListUsageRecordThisMonthResponse
	StatusCode                       int64
}
