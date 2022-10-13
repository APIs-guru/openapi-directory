package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

var ListUsageRecordServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type ListUsageRecordQueryParams struct {
	Category           *shared.UsageRecordEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
	EndDate            *time.Time                          `queryParam:"style=form,explode=true,name=EndDate"`
	IncludeSubaccounts *bool                               `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
	PageSize           *int64                              `queryParam:"style=form,explode=true,name=PageSize"`
	StartDate          *time.Time                          `queryParam:"style=form,explode=true,name=StartDate"`
}

type ListUsageRecordSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListUsageRecordRequest struct {
	ServerURL   *string
	PathParams  ListUsageRecordPathParams
	QueryParams ListUsageRecordQueryParams
	Security    ListUsageRecordSecurity
}

type ListUsageRecord200ApplicationJSONListUsageRecordResponse struct {
	End             *int64                                   `json:"end"`
	FirstPageURI    *string                                  `json:"first_page_uri"`
	NextPageURI     *string                                  `json:"next_page_uri"`
	Page            *int64                                   `json:"page"`
	PageSize        *int64                                   `json:"page_size"`
	PreviousPageURI *string                                  `json:"previous_page_uri"`
	Start           *int64                                   `json:"start"`
	URI             *string                                  `json:"uri"`
	UsageRecords    []shared.APIV2010AccountUsageUsageRecord `json:"usage_records"`
}

type ListUsageRecordResponse struct {
	ContentType             string
	ListUsageRecordResponse *ListUsageRecord200ApplicationJSONListUsageRecordResponse
	StatusCode              int64
}
