package operations

import (
"openapi/pkg/models/shared")
var CreateAccountServers = []string{
	"https://api.twilio.com",
}

type CreateAccountCreateAccountRequest struct {
    FriendlyName *string `form:"name=FriendlyName"`
    
}

type CreateAccountSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateAccountRequest struct {
    ServerURL *string 
    Request *CreateAccountCreateAccountRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateAccountSecurity 
    
}

type CreateAccountResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010Account *shared.APIV2010Account 
    
}

