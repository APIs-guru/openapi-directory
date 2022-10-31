package operations

import (
"openapi/pkg/models/shared")
var FetchConnectAppServers = []string{
	"https://api.twilio.com",
}

type FetchConnectAppPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchConnectAppSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchConnectAppRequest struct {
    ServerURL *string 
    PathParams FetchConnectAppPathParams 
    Security FetchConnectAppSecurity 
    
}

type FetchConnectAppResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountConnectApp *shared.APIV2010AccountConnectApp 
    
}

