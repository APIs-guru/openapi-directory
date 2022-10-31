package operations

import (
"openapi/pkg/models/shared")
var FetchMemberServers = []string{
	"https://api.twilio.com",
}

type FetchMemberPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
    QueueSid string `pathParam:"style=simple,explode=false,name=QueueSid"`
    
}

type FetchMemberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchMemberRequest struct {
    ServerURL *string 
    PathParams FetchMemberPathParams 
    Security FetchMemberSecurity 
    
}

type FetchMemberResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountQueueMember *shared.APIV2010AccountQueueMember 
    
}

