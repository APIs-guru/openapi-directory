package operations

import (
"time"
"openapi/pkg/models/shared")
var ListUsageRecordYesterdayServers = []string{
	"https://api.twilio.com",
}

type ListUsageRecordYesterdayPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListUsageRecordYesterdayQueryParams struct {
    Category *shared.UsageRecordYesterdayEnumCategoryEnum `queryParam:"style=form,explode=true,name=Category"`
    EndDate *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    IncludeSubaccounts *bool `queryParam:"style=form,explode=true,name=IncludeSubaccounts"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    
}

type ListUsageRecordYesterdaySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListUsageRecordYesterdayRequest struct {
    ServerURL *string 
    PathParams ListUsageRecordYesterdayPathParams 
    QueryParams ListUsageRecordYesterdayQueryParams 
    Security ListUsageRecordYesterdaySecurity 
    
}

type ListUsageRecordYesterdayListUsageRecordYesterdayResponse struct {
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    UsageRecords []shared.APIV2010AccountUsageUsageRecordUsageRecordYesterday `json:"usage_records,omitempty"`
    
}

type ListUsageRecordYesterdayResponse struct {
    ContentType string 
    ListUsageRecordYesterdayResponse *ListUsageRecordYesterdayListUsageRecordYesterdayResponse 
    StatusCode int64 
    
}

