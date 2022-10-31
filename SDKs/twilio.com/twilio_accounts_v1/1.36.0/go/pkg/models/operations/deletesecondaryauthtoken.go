package operations

import (
"openapi/pkg/models/shared")
var DeleteSecondaryAuthTokenServers = []string{
	"https://accounts.twilio.com",
}

type DeleteSecondaryAuthTokenSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteSecondaryAuthTokenRequest struct {
    ServerURL *string 
    Security DeleteSecondaryAuthTokenSecurity 
    
}

type DeleteSecondaryAuthTokenResponse struct {
    ContentType string 
    StatusCode int64 
    
}

