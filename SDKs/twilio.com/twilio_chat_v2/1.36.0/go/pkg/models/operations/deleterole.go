package operations

import (
"openapi/pkg/models/shared")
var DeleteRoleServers = []string{
	"https://chat.twilio.com",
}

type DeleteRolePathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteRoleSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteRoleRequest struct {
    ServerURL *string 
    PathParams DeleteRolePathParams 
    Security DeleteRoleSecurity 
    
}

type DeleteRoleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

