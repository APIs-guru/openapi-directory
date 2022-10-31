package operations

import (
"openapi/pkg/models/shared")
var FetchShortCodeServers = []string{
	"https://api.twilio.com",
}

type FetchShortCodePathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchShortCodeSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchShortCodeRequest struct {
    ServerURL *string 
    PathParams FetchShortCodePathParams 
    Security FetchShortCodeSecurity 
    
}

type FetchShortCodeResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountShortCode *shared.APIV2010AccountShortCode 
    
}

