package operations

import (
"openapi/pkg/models/shared")
var DeleteVariableServers = []string{
	"https://serverless.twilio.com",
}

type DeleteVariablePathParams struct {
    EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteVariableSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteVariableRequest struct {
    ServerURL *string 
    PathParams DeleteVariablePathParams 
    Security DeleteVariableSecurity 
    
}

type DeleteVariableResponse struct {
    ContentType string 
    StatusCode int64 
    
}

