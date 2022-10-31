package operations

import (
"openapi/pkg/models/shared")
var FetchExecutionContextServers = []string{
	"https://studio.twilio.com",
}

type FetchExecutionContextPathParams struct {
    ExecutionSid string `pathParam:"style=simple,explode=false,name=ExecutionSid"`
    FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
    
}

type FetchExecutionContextSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchExecutionContextRequest struct {
    ServerURL *string 
    PathParams FetchExecutionContextPathParams 
    Security FetchExecutionContextSecurity 
    
}

type FetchExecutionContextResponse struct {
    ContentType string 
    StatusCode int64 
    StudioV2FlowExecutionExecutionContext *shared.StudioV2FlowExecutionExecutionContext 
    
}

