package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMemberServers = []string{
	"https://api.twilio.com",
}

type UpdateMemberPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	QueueSid   string `pathParam:"style=simple,explode=false,name=QueueSid"`
}

type UpdateMemberRequestBodyMethodEnum string

const (
	UpdateMemberRequestBodyMethodEnumHead   UpdateMemberRequestBodyMethodEnum = "HEAD"
	UpdateMemberRequestBodyMethodEnumGet    UpdateMemberRequestBodyMethodEnum = "GET"
	UpdateMemberRequestBodyMethodEnumPost   UpdateMemberRequestBodyMethodEnum = "POST"
	UpdateMemberRequestBodyMethodEnumPatch  UpdateMemberRequestBodyMethodEnum = "PATCH"
	UpdateMemberRequestBodyMethodEnumPut    UpdateMemberRequestBodyMethodEnum = "PUT"
	UpdateMemberRequestBodyMethodEnumDelete UpdateMemberRequestBodyMethodEnum = "DELETE"
)

type UpdateMemberRequestBodyUpdateMemberRequest struct {
	Method *UpdateMemberRequestBodyMethodEnum `form:"name=Method"`
	URL    string                             `form:"name=Url"`
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
	APIV2010AccountQueueMember *shared.APIV2010AccountQueueMember
}
