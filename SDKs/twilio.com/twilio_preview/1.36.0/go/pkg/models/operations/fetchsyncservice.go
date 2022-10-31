package operations

import (
"openapi/pkg/models/shared")
var FetchSyncServiceServers = []string{
	"https://preview.twilio.com",
}

type FetchSyncServicePathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSyncServiceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSyncServiceRequest struct {
    ServerURL *string 
    PathParams FetchSyncServicePathParams 
    Security FetchSyncServiceSecurity 
    
}

type FetchSyncServiceResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewSyncService *shared.PreviewSyncService 
    
}

