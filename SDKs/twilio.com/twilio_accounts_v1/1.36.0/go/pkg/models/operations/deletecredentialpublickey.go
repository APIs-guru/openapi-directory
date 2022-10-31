package operations

import (
"openapi/pkg/models/shared")
var DeleteCredentialPublicKeyServers = []string{
	"https://accounts.twilio.com",
}

type DeleteCredentialPublicKeyPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteCredentialPublicKeySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteCredentialPublicKeyRequest struct {
    ServerURL *string 
    PathParams DeleteCredentialPublicKeyPathParams 
    Security DeleteCredentialPublicKeySecurity 
    
}

type DeleteCredentialPublicKeyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

