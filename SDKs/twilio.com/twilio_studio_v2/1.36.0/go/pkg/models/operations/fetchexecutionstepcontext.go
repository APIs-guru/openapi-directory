package operations

import (
"openapi/pkg/models/shared")
var FetchExecutionStepContextServers = []string{
	"https://studio.twilio.com",
}

type FetchExecutionStepContextPathParams struct {
    ExecutionSid string `pathParam:"style=simple,explode=false,name=ExecutionSid"`
    FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
    StepSid string `pathParam:"style=simple,explode=false,name=StepSid"`
    
}

type FetchExecutionStepContextSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchExecutionStepContextRequest struct {
    ServerURL *string 
    PathParams FetchExecutionStepContextPathParams 
    Security FetchExecutionStepContextSecurity 
    
}

type FetchExecutionStepContextResponse struct {
    ContentType string 
    StatusCode int64 
    StudioV2FlowExecutionExecutionStepExecutionStepContext *shared.StudioV2FlowExecutionExecutionStepExecutionStepContext 
    
}

