package operations

import (
"openapi/pkg/models/shared")
var UpdateOriginationURLServers = []string{
	"https://trunking.twilio.com",
}

type UpdateOriginationURLPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
    
}

type UpdateOriginationURLUpdateOriginationURLRequest struct {
    Enabled *bool `form:"name=Enabled"`
    FriendlyName *string `form:"name=FriendlyName"`
    Priority *int64 `form:"name=Priority"`
    SipURL *string `form:"name=SipUrl"`
    Weight *int64 `form:"name=Weight"`
    
}

type UpdateOriginationURLSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateOriginationURLRequest struct {
    ServerURL *string 
    PathParams UpdateOriginationURLPathParams 
    Request *UpdateOriginationURLUpdateOriginationURLRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateOriginationURLSecurity 
    
}

type UpdateOriginationURLResponse struct {
    ContentType string 
    StatusCode int64 
    TrunkingV1TrunkOriginationURL *shared.TrunkingV1TrunkOriginationURL 
    
}

