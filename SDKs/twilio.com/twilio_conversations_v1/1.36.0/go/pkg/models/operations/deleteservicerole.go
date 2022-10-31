package operations

import (
"openapi/pkg/models/shared")
var DeleteServiceRoleServers = []string{
	"https://conversations.twilio.com",
}

type DeleteServiceRolePathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteServiceRoleSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteServiceRoleRequest struct {
    ServerURL *string 
    PathParams DeleteServiceRolePathParams 
    Security DeleteServiceRoleSecurity 
    
}

type DeleteServiceRoleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

