package operations

import (
"openapi/pkg/models/shared")
var CreateCredentialListServers = []string{
	"https://trunking.twilio.com",
}

type CreateCredentialListPathParams struct {
    TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
    
}

type CreateCredentialListCreateCredentialListRequest struct {
    CredentialListSid string `form:"name=CredentialListSid"`
    
}

type CreateCredentialListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateCredentialListRequest struct {
    ServerURL *string 
    PathParams CreateCredentialListPathParams 
    Request *CreateCredentialListCreateCredentialListRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateCredentialListSecurity 
    
}

type CreateCredentialListResponse struct {
    ContentType string 
    StatusCode int64 
    TrunkingV1TrunkCredentialList *shared.TrunkingV1TrunkCredentialList 
    
}

