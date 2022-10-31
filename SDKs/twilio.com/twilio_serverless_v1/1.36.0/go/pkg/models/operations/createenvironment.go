package operations

import (
"openapi/pkg/models/shared")
var CreateEnvironmentServers = []string{
	"https://serverless.twilio.com",
}

type CreateEnvironmentPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type CreateEnvironmentCreateEnvironmentRequest struct {
    DomainSuffix *string `form:"name=DomainSuffix"`
    UniqueName string `form:"name=UniqueName"`
    
}

type CreateEnvironmentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateEnvironmentRequest struct {
    ServerURL *string 
    PathParams CreateEnvironmentPathParams 
    Request *CreateEnvironmentCreateEnvironmentRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateEnvironmentSecurity 
    
}

type CreateEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    ServerlessV1ServiceEnvironment *shared.ServerlessV1ServiceEnvironment 
    
}

