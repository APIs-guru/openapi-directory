package operations

import (
"time"
"openapi/pkg/models/shared")
var ListExecutionServers = []string{
	"https://studio.twilio.com",
}

type ListExecutionPathParams struct {
    FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
    
}

type ListExecutionQueryParams struct {
    DateCreatedFrom *time.Time `queryParam:"style=form,explode=true,name=DateCreatedFrom"`
    DateCreatedTo *time.Time `queryParam:"style=form,explode=true,name=DateCreatedTo"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListExecutionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListExecutionRequest struct {
    ServerURL *string 
    PathParams ListExecutionPathParams 
    QueryParams ListExecutionQueryParams 
    Security ListExecutionSecurity 
    
}

type ListExecutionListExecutionResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListExecutionListExecutionResponse struct {
    Executions []shared.StudioV2FlowExecution `json:"executions,omitempty"`
    Meta *ListExecutionListExecutionResponseMeta `json:"meta,omitempty"`
    
}

type ListExecutionResponse struct {
    ContentType string 
    ListExecutionResponse *ListExecutionListExecutionResponse 
    StatusCode int64 
    
}

