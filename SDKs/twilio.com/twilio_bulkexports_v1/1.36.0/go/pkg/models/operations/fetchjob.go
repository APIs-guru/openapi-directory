package operations

import (
"openapi/pkg/models/shared")
var FetchJobServers = []string{
	"https://bulkexports.twilio.com",
}

type FetchJobPathParams struct {
    JobSid string `pathParam:"style=simple,explode=false,name=JobSid"`
    
}

type FetchJobSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchJobRequest struct {
    ServerURL *string 
    PathParams FetchJobPathParams 
    Security FetchJobSecurity 
    
}

type FetchJobResponse struct {
    ContentType string 
    StatusCode int64 
    BulkexportsV1ExportJob *shared.BulkexportsV1ExportJob 
    
}

