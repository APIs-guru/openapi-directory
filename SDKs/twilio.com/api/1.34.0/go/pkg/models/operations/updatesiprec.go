package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSiprecServers = []string{
	"https://api.twilio.com",
}

type UpdateSiprecPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSiprecRequestBodyUpdateSiprecRequest struct {
	Status shared.SiprecEnumUpdateStatusEnum `form:"name=Status"`
}

type UpdateSiprecSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSiprecRequest struct {
	ServerURL  *string
	PathParams UpdateSiprecPathParams
	Request    *UpdateSiprecRequestBodyUpdateSiprecRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSiprecSecurity
}

type UpdateSiprecResponse struct {
	ContentType               string
	StatusCode                int64
	APIV2010AccountCallSiprec *shared.APIV2010AccountCallSiprec
}
