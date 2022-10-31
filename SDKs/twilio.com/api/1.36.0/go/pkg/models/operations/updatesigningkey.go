package operations

import (
"openapi/pkg/models/shared")
var UpdateSigningKeyServers = []string{
	"https://api.twilio.com",
}

type UpdateSigningKeyPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateSigningKeyUpdateSigningKeyRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    
}

type UpdateSigningKeySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateSigningKeyRequest struct {
    ServerURL *string 
    PathParams UpdateSigningKeyPathParams 
    Request *UpdateSigningKeyUpdateSigningKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateSigningKeySecurity 
    
}

type UpdateSigningKeyResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountSigningKey *shared.APIV2010AccountSigningKey 
    
}

