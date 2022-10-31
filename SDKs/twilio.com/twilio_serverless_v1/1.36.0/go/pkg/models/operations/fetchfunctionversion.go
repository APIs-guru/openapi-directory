package operations

import (
"openapi/pkg/models/shared")
var FetchFunctionVersionServers = []string{
	"https://serverless.twilio.com",
}

type FetchFunctionVersionPathParams struct {
    FunctionSid string `pathParam:"style=simple,explode=false,name=FunctionSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchFunctionVersionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchFunctionVersionRequest struct {
    ServerURL *string 
    PathParams FetchFunctionVersionPathParams 
    Security FetchFunctionVersionSecurity 
    
}

type FetchFunctionVersionResponse struct {
    ContentType string 
    StatusCode int64 
    ServerlessV1ServiceFunctionFunctionVersion *shared.ServerlessV1ServiceFunctionFunctionVersion 
    
}

