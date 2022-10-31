package operations

import (
"openapi/pkg/models/shared")
var FetchRoleServers = []string{
	"https://ip-messaging.twilio.com",
}

type FetchRolePathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchRoleSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchRoleRequest struct {
    ServerURL *string 
    PathParams FetchRolePathParams 
    Security FetchRoleSecurity 
    
}

type FetchRoleResponse struct {
    ContentType string 
    StatusCode int64 
    IPMessagingV1ServiceRole *shared.IPMessagingV1ServiceRole 
    
}

