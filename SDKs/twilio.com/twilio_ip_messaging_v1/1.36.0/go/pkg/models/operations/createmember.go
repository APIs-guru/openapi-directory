package operations

import (
"openapi/pkg/models/shared")
var CreateMemberServers = []string{
	"https://ip-messaging.twilio.com",
}

type CreateMemberPathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type CreateMemberCreateMemberRequest struct {
    Identity string `form:"name=Identity"`
    RoleSid *string `form:"name=RoleSid"`
    
}

type CreateMemberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateMemberRequest struct {
    ServerURL *string 
    PathParams CreateMemberPathParams 
    Request *CreateMemberCreateMemberRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateMemberSecurity 
    
}

type CreateMemberResponse struct {
    ContentType string 
    StatusCode int64 
    IPMessagingV1ServiceChannelMember *shared.IPMessagingV1ServiceChannelMember 
    
}

