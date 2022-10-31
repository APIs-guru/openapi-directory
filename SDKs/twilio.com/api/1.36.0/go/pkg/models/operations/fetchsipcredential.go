package operations

import (
"openapi/pkg/models/shared")
var FetchSipCredentialServers = []string{
	"https://api.twilio.com",
}

type FetchSipCredentialPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    CredentialListSid string `pathParam:"style=simple,explode=false,name=CredentialListSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchSipCredentialSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchSipCredentialRequest struct {
    ServerURL *string 
    PathParams FetchSipCredentialPathParams 
    Security FetchSipCredentialSecurity 
    
}

type FetchSipCredentialResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountSipSipCredentialListSipCredential *shared.APIV2010AccountSipSipCredentialListSipCredential 
    
}

