package operations

import (
"openapi/pkg/models/shared")
var CreateNewSigningKeyServers = []string{
	"https://api.twilio.com",
}

type CreateNewSigningKeyPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type CreateNewSigningKeyCreateNewSigningKeyRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    
}

type CreateNewSigningKeySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateNewSigningKeyRequest struct {
    ServerURL *string 
    PathParams CreateNewSigningKeyPathParams 
    Request *CreateNewSigningKeyCreateNewSigningKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateNewSigningKeySecurity 
    
}

type CreateNewSigningKeyResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountNewSigningKey *shared.APIV2010AccountNewSigningKey 
    
}

