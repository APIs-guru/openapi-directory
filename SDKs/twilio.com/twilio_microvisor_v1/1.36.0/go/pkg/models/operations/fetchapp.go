package operations

import (
"openapi/pkg/models/shared")
var FetchAppServers = []string{
	"https://microvisor.twilio.com",
}

type FetchAppPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchAppSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchAppRequest struct {
    ServerURL *string 
    PathParams FetchAppPathParams 
    Security FetchAppSecurity 
    
}

type FetchAppResponse struct {
    ContentType string 
    StatusCode int64 
    MicrovisorV1App *shared.MicrovisorV1App 
    
}

