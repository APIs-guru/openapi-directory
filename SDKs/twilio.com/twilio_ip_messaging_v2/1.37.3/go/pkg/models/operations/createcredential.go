package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCredentialServerList = []string{
	"https://ip-messaging.twilio.com",
}

type CreateCredentialCreateCredentialRequest struct {
	APIKey       *string                              `form:"name=ApiKey"`
	Certificate  *string                              `form:"name=Certificate"`
	FriendlyName *string                              `form:"name=FriendlyName"`
	PrivateKey   *string                              `form:"name=PrivateKey"`
	Sandbox      *bool                                `form:"name=Sandbox"`
	Secret       *string                              `form:"name=Secret"`
	Type         shared.CredentialEnumPushServiceEnum `form:"name=Type"`
}

type CreateCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCredentialRequest struct {
	ServerURL *string
	Request   *CreateCredentialCreateCredentialRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCredentialSecurity
}

type CreateCredentialResponse struct {
	ContentType             string
	StatusCode              int64
	IPMessagingV2Credential *shared.IPMessagingV2Credential
}
