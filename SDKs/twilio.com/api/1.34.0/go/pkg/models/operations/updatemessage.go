package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateMessageServers = []string{
	"https://api.twilio.com",
}

type UpdateMessagePathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateMessageRequestBodyUpdateMessageRequest struct {
	Body   *string                             `form:"name=Body"`
	Status *shared.MessageEnumUpdateStatusEnum `form:"name=Status"`
}

type UpdateMessageSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateMessageRequest struct {
	ServerURL  *string
	PathParams UpdateMessagePathParams
	Request    *UpdateMessageRequestBodyUpdateMessageRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateMessageSecurity
}

type UpdateMessageResponse struct {
	ContentType            string
	StatusCode             int64
	APIV2010AccountMessage *shared.APIV2010AccountMessage
}
