package operations

import (
"time"
"openapi/pkg/models/shared")
var ListUsageRecordMonthlyServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordMonthlyPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListUsageRecordMonthlyQueryParams struct {
    Category *shared.UsageRecordMonthlyEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
    EndDate *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    IncludeSubaccounts *bool `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    
}

type ListUsageRecordMonthlySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListUsageRecordMonthlyRequest struct {
    ServerURL *string 
    PathParams ListUsageRecordMonthlyPathParams 
    QueryParams ListUsageRecordMonthlyQueryParams 
    Security ListUsageRecordMonthlySecurity 
    
}

type ListUsageRecordMonthlyListUsageRecordMonthlyResponse struct {
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    UsageRecords []shared.APIV2010AccountUsageUsageRecordUsageRecordMonthly `json:"usage_records,omitempty"`
    
}

type ListUsageRecordMonthlyResponse struct {
    ContentType string 
    ListUsageRecordMonthlyResponse *ListUsageRecordMonthlyListUsageRecordMonthlyResponse 
    StatusCode int64 
    
}

