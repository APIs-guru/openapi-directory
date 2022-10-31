package operations

import (
"openapi/pkg/models/shared")
var FetchVariableServers = []string{
	"https://serverless.twilio.com",
}

type FetchVariablePathParams struct {
    EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchVariableSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchVariableRequest struct {
    ServerURL *string 
    PathParams FetchVariablePathParams 
    Security FetchVariableSecurity 
    
}

type FetchVariableResponse struct {
    ContentType string 
    StatusCode int64 
    ServerlessV1ServiceEnvironmentVariable *shared.ServerlessV1ServiceEnvironmentVariable 
    
}

