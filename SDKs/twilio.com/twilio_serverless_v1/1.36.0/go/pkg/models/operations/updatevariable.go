package operations

import (
"openapi/pkg/models/shared")
var UpdateVariableServers = []string{
	"https://serverless.twilio.com",
}

type UpdateVariablePathParams struct {
    EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateVariableUpdateVariableRequest struct {
    Key *string `form:"name=Key"`
    Value *string `form:"name=Value"`
    
}

type UpdateVariableSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateVariableRequest struct {
    ServerURL *string 
    PathParams UpdateVariablePathParams 
    Request *UpdateVariableUpdateVariableRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateVariableSecurity 
    
}

type UpdateVariableResponse struct {
    ContentType string 
    StatusCode int64 
    ServerlessV1ServiceEnvironmentVariable *shared.ServerlessV1ServiceEnvironmentVariable 
    
}

