package operations

import (
"openapi/pkg/models/shared")
var DeleteSyncServiceServers = []string{
	"https://preview.twilio.com",
}

type DeleteSyncServicePathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteSyncServiceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSyncServiceRequest struct {
    ServerURL *string 
    PathParams DeleteSyncServicePathParams 
    Security DeleteSyncServiceSecurity 
    
}

type DeleteSyncServiceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

