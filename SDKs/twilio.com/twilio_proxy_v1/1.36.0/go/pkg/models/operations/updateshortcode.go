package operations

import (
"openapi/pkg/models/shared")
var UpdateShortCodeServers = []string{
	"https://proxy.twilio.com",
}

type UpdateShortCodePathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateShortCodeUpdateShortCodeRequest struct {
    IsReserved *bool `form:"name=IsReserved"`
    
}

type UpdateShortCodeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateShortCodeRequest struct {
    ServerURL *string 
    PathParams UpdateShortCodePathParams 
    Request *UpdateShortCodeUpdateShortCodeRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateShortCodeSecurity 
    
}

type UpdateShortCodeResponse struct {
    ContentType string 
    StatusCode int64 
    ProxyV1ServiceShortCode *shared.ProxyV1ServiceShortCode 
    
}

