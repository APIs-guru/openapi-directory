package operations

import (
"openapi/pkg/models/shared")
var FetchSipCredentialListServers = []string{
	"https://api.twilio.com",
}

type FetchSipCredentialListPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSipCredentialListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSipCredentialListRequest struct {
    ServerURL *string 
    PathParams FetchSipCredentialListPathParams 
    Security FetchSipCredentialListSecurity 
    
}

type FetchSipCredentialListResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountSipSipCredentialList *shared.APIV2010AccountSipSipCredentialList 
    
}

