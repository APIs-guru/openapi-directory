package operations

import (
"openapi/pkg/models/shared")
var DeleteJobServers = []string{
	"https://bulkexports.twilio.com",
}

type DeleteJobPathParams struct {
    JobSid string `pathParam:"style=simple,explode=false,name=JobSid"`
    
}

type DeleteJobSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteJobRequest struct {
    ServerURL *string 
    PathParams DeleteJobPathParams 
    Security DeleteJobSecurity 
    
}

type DeleteJobResponse struct {
    ContentType string 
    StatusCode int64 
    
}

