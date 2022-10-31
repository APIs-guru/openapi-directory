package operations

import (
"openapi/pkg/models/shared")
var DeleteBuildServers = []string{
	"https://serverless.twilio.com",
}

type DeleteBuildPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteBuildSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteBuildRequest struct {
    ServerURL *string 
    PathParams DeleteBuildPathParams 
    Security DeleteBuildSecurity 
    
}

type DeleteBuildResponse struct {
    ContentType string 
    StatusCode int64 
    
}

