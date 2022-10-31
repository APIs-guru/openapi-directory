package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateCredentialServers = []string{
	"https://ip-messaging.twilio.com",
}

type UpdateCredentialPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateCredentialUpdateCredentialRequest struct {
	APIKey       *string `form:"name=ApiKey"`
	Certificate  *string `form:"name=Certificate"`
	FriendlyName *string `form:"name=FriendlyName"`
	PrivateKey   *string `form:"name=PrivateKey"`
	Sandbox      *bool   `form:"name=Sandbox"`
	Secret       *string `form:"name=Secret"`
}

type UpdateCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateCredentialRequest struct {
	ServerURL  *string
	PathParams UpdateCredentialPathParams
	Request    *UpdateCredentialUpdateCredentialRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateCredentialSecurity
}

type UpdateCredentialResponse struct {
	ContentType             string
	StatusCode              int64
	IPMessagingV2Credential *shared.IPMessagingV2Credential
}
