package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSipCredentialServerList = []string{
	"https://api.twilio.com",
}

type UpdateSipCredentialPathParams struct {
	AccountSid        string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CredentialListSid string `pathParam:"style=simple,explode=false,name=CredentialListSid"`
	Sid               string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSipCredentialUpdateSipCredentialRequest struct {
	Password *string `form:"name=Password"`
}

type UpdateSipCredentialSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSipCredentialRequest struct {
	ServerURL  *string
	PathParams UpdateSipCredentialPathParams
	Request    *UpdateSipCredentialUpdateSipCredentialRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSipCredentialSecurity
}

type UpdateSipCredentialResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	APIV2010AccountSipSipCredentialListSipCredential *shared.APIV2010AccountSipSipCredentialListSipCredential
}
