package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMemberServers = []string{
	"https://chat.twilio.com",
}

type UpdateMemberPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateMemberRequestBodyUpdateMemberRequest struct {
	LastConsumedMessageIndex *int64  `form:"name=LastConsumedMessageIndex"`
	RoleSid                  *string `form:"name=RoleSid"`
}

type UpdateMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMemberRequest struct {
	ServerURL  *string
	PathParams UpdateMemberPathParams
	Request    *UpdateMemberRequestBodyUpdateMemberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMemberSecurity
}

type UpdateMemberResponse struct {
	ContentType                string
	StatusCode                 int64
	ChatV1ServiceChannelMember *shared.ChatV1ServiceChannelMember
}
