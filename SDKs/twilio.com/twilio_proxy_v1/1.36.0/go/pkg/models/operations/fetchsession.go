package operations

import (
"openapi/pkg/models/shared")
var FetchSessionServers = []string{
	"https://proxy.twilio.com",
}

type FetchSessionPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSessionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSessionRequest struct {
    ServerURL *string 
    PathParams FetchSessionPathParams 
    Security FetchSessionSecurity 
    
}

type FetchSessionResponse struct {
    ContentType string 
    StatusCode int64 
    ProxyV1ServiceSession *shared.ProxyV1ServiceSession 
    
}

