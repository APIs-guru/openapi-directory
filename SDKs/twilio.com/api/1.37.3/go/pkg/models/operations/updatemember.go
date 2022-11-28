package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMemberServerList = []string{
	"https://api.twilio.com",
}

type UpdateMemberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	QueueSid   string `pathParam:"style=simple,explode=false,name=QueueSid"`
}

type UpdateMemberUpdateMemberRequestMethodEnum string

const (
	UpdateMemberUpdateMemberRequestMethodEnumHead   UpdateMemberUpdateMemberRequestMethodEnum = "HEAD"
	UpdateMemberUpdateMemberRequestMethodEnumGet    UpdateMemberUpdateMemberRequestMethodEnum = "GET"
	UpdateMemberUpdateMemberRequestMethodEnumPost   UpdateMemberUpdateMemberRequestMethodEnum = "POST"
	UpdateMemberUpdateMemberRequestMethodEnumPatch  UpdateMemberUpdateMemberRequestMethodEnum = "PATCH"
	UpdateMemberUpdateMemberRequestMethodEnumPut    UpdateMemberUpdateMemberRequestMethodEnum = "PUT"
	UpdateMemberUpdateMemberRequestMethodEnumDelete UpdateMemberUpdateMemberRequestMethodEnum = "DELETE"
)

type UpdateMemberUpdateMemberRequest struct {
	Method *UpdateMemberUpdateMemberRequestMethodEnum `form:"name=Method"`
	URL    string                                     `form:"name=Url"`
}

type UpdateMemberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMemberRequest struct {
	ServerURL  *string
	PathParams UpdateMemberPathParams
	Request    *UpdateMemberUpdateMemberRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMemberSecurity
}

type UpdateMemberResponse struct {
	ContentType                string
	StatusCode                 int64
	APIV2010AccountQueueMember *shared.APIV2010AccountQueueMember
}
