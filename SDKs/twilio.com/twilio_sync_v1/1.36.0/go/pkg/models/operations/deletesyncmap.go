package operations

import (
"openapi/pkg/models/shared")
var DeleteSyncMapServers = []string{
	"https://sync.twilio.com",
}

type DeleteSyncMapPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteSyncMapSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSyncMapRequest struct {
    ServerURL *string 
    PathParams DeleteSyncMapPathParams 
    Security DeleteSyncMapSecurity 
    
}

type DeleteSyncMapResponse struct {
    ContentType string 
    StatusCode int64 
    
}

