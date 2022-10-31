package operations

import (
"openapi/pkg/models/shared")
var CreatePlayerStreamerPlaybackGrantServers = []string{
	"https://media.twilio.com",
}

type CreatePlayerStreamerPlaybackGrantPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest struct {
    AccessControlAllowOrigin *string `form:"name=AccessControlAllowOrigin"`
    TTL *int64 `form:"name=Ttl"`
    
}

type CreatePlayerStreamerPlaybackGrantSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreatePlayerStreamerPlaybackGrantRequest struct {
    ServerURL *string 
    PathParams CreatePlayerStreamerPlaybackGrantPathParams 
    Request *CreatePlayerStreamerPlaybackGrantCreatePlayerStreamerPlaybackGrantRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreatePlayerStreamerPlaybackGrantSecurity 
    
}

type CreatePlayerStreamerPlaybackGrantResponse struct {
    ContentType string 
    StatusCode int64 
    MediaV1PlayerStreamerPlayerStreamerPlaybackGrant *shared.MediaV1PlayerStreamerPlayerStreamerPlaybackGrant 
    
}

