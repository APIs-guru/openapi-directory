package operations

import (
"openapi/pkg/models/shared")
var ListExecutionStepServers = []string{
	"https://studio.twilio.com",
}

type ListExecutionStepPathParams struct {
    ExecutionSid string `pathParam:"style=simple,explode=false,name=ExecutionSid"`
    FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
    
}

type ListExecutionStepQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListExecutionStepSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListExecutionStepRequest struct {
    ServerURL *string 
    PathParams ListExecutionStepPathParams 
    QueryParams ListExecutionStepQueryParams 
    Security ListExecutionStepSecurity 
    
}

type ListExecutionStepListExecutionStepResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListExecutionStepListExecutionStepResponse struct {
    Meta *ListExecutionStepListExecutionStepResponseMeta `json:"meta,omitempty"`
    Steps []shared.StudioV1FlowExecutionExecutionStep `json:"steps,omitempty"`
    
}

type ListExecutionStepResponse struct {
    ContentType string 
    ListExecutionStepResponse *ListExecutionStepListExecutionStepResponse 
    StatusCode int64 
    
}

