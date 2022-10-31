package operations

import (
"openapi/pkg/models/shared")
var FetchByocTrunkServers = []string{
	"https://voice.twilio.com",
}

type FetchByocTrunkPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchByocTrunkSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchByocTrunkRequest struct {
    ServerURL *string 
    PathParams FetchByocTrunkPathParams 
    Security FetchByocTrunkSecurity 
    
}

type FetchByocTrunkResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1ByocTrunk *shared.VoiceV1ByocTrunk 
    
}

