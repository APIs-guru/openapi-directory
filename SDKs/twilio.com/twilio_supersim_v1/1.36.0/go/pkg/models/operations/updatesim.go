package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSimServers = []string{
	"https://supersim.twilio.com",
}

type UpdateSimPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSimUpdateSimRequestCallbackMethodEnum string

const (
	UpdateSimUpdateSimRequestCallbackMethodEnumHead   UpdateSimUpdateSimRequestCallbackMethodEnum = "HEAD"
	UpdateSimUpdateSimRequestCallbackMethodEnumGet    UpdateSimUpdateSimRequestCallbackMethodEnum = "GET"
	UpdateSimUpdateSimRequestCallbackMethodEnumPost   UpdateSimUpdateSimRequestCallbackMethodEnum = "POST"
	UpdateSimUpdateSimRequestCallbackMethodEnumPatch  UpdateSimUpdateSimRequestCallbackMethodEnum = "PATCH"
	UpdateSimUpdateSimRequestCallbackMethodEnumPut    UpdateSimUpdateSimRequestCallbackMethodEnum = "PUT"
	UpdateSimUpdateSimRequestCallbackMethodEnumDelete UpdateSimUpdateSimRequestCallbackMethodEnum = "DELETE"
)

type UpdateSimUpdateSimRequest struct {
	AccountSid     *string                                      `form:"name=AccountSid"`
	CallbackMethod *UpdateSimUpdateSimRequestCallbackMethodEnum `form:"name=CallbackMethod"`
	CallbackURL    *string                                      `form:"name=CallbackUrl"`
	Fleet          *string                                      `form:"name=Fleet"`
	Status         *shared.SimEnumStatusUpdateEnum              `form:"name=Status"`
	UniqueName     *string                                      `form:"name=UniqueName"`
}

type UpdateSimSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSimRequest struct {
	ServerURL  *string
	PathParams UpdateSimPathParams
	Request    *UpdateSimUpdateSimRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSimSecurity
}

type UpdateSimResponse struct {
	ContentType   string
	StatusCode    int64
	SupersimV1Sim *shared.SupersimV1Sim
}
