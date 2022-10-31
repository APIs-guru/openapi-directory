package operations

import (
"openapi/pkg/models/shared")
var CreateExecutionServers = []string{
	"https://studio.twilio.com",
}

type CreateExecutionPathParams struct {
    FlowSid string `pathParam:"style=simple,explode=false,name=FlowSid"`
    
}

type CreateExecutionCreateExecutionRequest struct {
    From string `form:"name=From"`
    Parameters *interface{} `form:"name=Parameters"`
    To string `form:"name=To"`
    
}

type CreateExecutionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateExecutionRequest struct {
    ServerURL *string 
    PathParams CreateExecutionPathParams 
    Request *CreateExecutionCreateExecutionRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateExecutionSecurity 
    
}

type CreateExecutionResponse struct {
    ContentType string 
    StatusCode int64 
    StudioV1FlowExecution *shared.StudioV1FlowExecution 
    
}

