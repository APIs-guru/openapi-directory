package operations

import (
"openapi/pkg/models/shared")
var CreatePlayerStreamerServers = []string{
	"https://media.twilio.com",
}


type CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum string

const (
    CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnumHead CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = "HEAD"
CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnumGet CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = "GET"
CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnumPost CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = "POST"
CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnumPatch CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = "PATCH"
CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnumPut CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = "PUT"
CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnumDelete CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum = "DELETE"
)


type CreatePlayerStreamerCreatePlayerStreamerRequest struct {
    MaxDuration *int64 `form:"name=MaxDuration"`
    StatusCallback *string `form:"name=StatusCallback"`
    StatusCallbackMethod *CreatePlayerStreamerCreatePlayerStreamerRequestStatusCallbackMethodEnum `form:"name=StatusCallbackMethod"`
    Video *bool `form:"name=Video"`
    
}

type CreatePlayerStreamerSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreatePlayerStreamerRequest struct {
    ServerURL *string 
    Request *CreatePlayerStreamerCreatePlayerStreamerRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreatePlayerStreamerSecurity 
    
}

type CreatePlayerStreamerResponse struct {
    ContentType string 
    StatusCode int64 
    MediaV1PlayerStreamer *shared.MediaV1PlayerStreamer 
    
}

