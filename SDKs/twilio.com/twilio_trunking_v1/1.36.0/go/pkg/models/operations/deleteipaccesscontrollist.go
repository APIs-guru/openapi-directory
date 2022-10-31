package operations

import (
"openapi/pkg/models/shared")
var DeleteIPAccessControlListServers = []string{
	"https://trunking.twilio.com",
}

type DeleteIPAccessControlListPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
    
}

type DeleteIPAccessControlListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteIPAccessControlListRequest struct {
    ServerURL *string 
    PathParams DeleteIPAccessControlListPathParams 
    Security DeleteIPAccessControlListSecurity 
    
}

type DeleteIPAccessControlListResponse struct {
    ContentType string 
    StatusCode int64 
    
}

