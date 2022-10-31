package operations

import (
"openapi/pkg/models/shared")
var FetchQueueServers = []string{
	"https://api.twilio.com",
}

type FetchQueuePathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchQueueSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchQueueRequest struct {
    ServerURL *string 
    PathParams FetchQueuePathParams 
    Security FetchQueueSecurity 
    
}

type FetchQueueResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountQueue *shared.APIV2010AccountQueue 
    
}

