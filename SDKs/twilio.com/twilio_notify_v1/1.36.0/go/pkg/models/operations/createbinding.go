package operations

import (
	"openapi/pkg/models/shared"
)

var CreateBindingServers = []string{
	"https://notify.twilio.com",
}

type CreateBindingPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateBindingCreateBindingRequest struct {
	Address                     string                            `form:"name=Address"`
	BindingType                 shared.BindingEnumBindingTypeEnum `form:"name=BindingType"`
	CredentialSid               *string                           `form:"name=CredentialSid"`
	Endpoint                    *string                           `form:"name=Endpoint"`
	Identity                    string                            `form:"name=Identity"`
	NotificationProtocolVersion *string                           `form:"name=NotificationProtocolVersion"`
	Tag                         []string                          `form:"name=Tag"`
}

type CreateBindingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateBindingRequest struct {
	ServerURL  *string
	PathParams CreateBindingPathParams
	Request    *CreateBindingCreateBindingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateBindingSecurity
}

type CreateBindingResponse struct {
	ContentType            string
	StatusCode             int64
	NotifyV1ServiceBinding *shared.NotifyV1ServiceBinding
}
