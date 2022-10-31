package operations

import (
"openapi/pkg/models/shared")
var FetchIPAccessControlListServers = []string{
	"https://trunking.twilio.com",
}

type FetchIPAccessControlListPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    TrunkSid string `pathParam:"style=simple,explode=false,name=TrunkSid"`
    
}

type FetchIPAccessControlListSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchIPAccessControlListRequest struct {
    ServerURL *string 
    PathParams FetchIPAccessControlListPathParams 
    Security FetchIPAccessControlListSecurity 
    
}

type FetchIPAccessControlListResponse struct {
    ContentType string 
    StatusCode int64 
    TrunkingV1TrunkIPAccessControlList *shared.TrunkingV1TrunkIPAccessControlList 
    
}

