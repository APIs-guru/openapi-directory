package operations

import (
"time"
"openapi/pkg/models/shared")
var ListAlertServers = []string{
	"https://monitor.twilio.com",
}

type ListAlertQueryParams struct {
    EndDate *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    LogLevel *string `queryParam:"style=form,explode=true,name=LogLevel"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    
}

type ListAlertSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListAlertRequest struct {
    ServerURL *string 
    QueryParams ListAlertQueryParams 
    Security ListAlertSecurity 
    
}

type ListAlertListAlertResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListAlertListAlertResponse struct {
    Alerts []shared.MonitorV1Alert `json:"alerts,omitempty"`
    Meta *ListAlertListAlertResponseMeta `json:"meta,omitempty"`
    
}

type ListAlertResponse struct {
    ContentType string 
    ListAlertResponse *ListAlertListAlertResponse 
    StatusCode int64 
    
}

