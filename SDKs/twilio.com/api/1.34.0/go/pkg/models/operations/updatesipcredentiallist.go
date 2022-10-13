package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSipCredentialListServers = []string{
	"https://api.twilio.com",
}

type UpdateSipCredentialListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSipCredentialListRequestBodyUpdateSipCredentialListRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type UpdateSipCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSipCredentialListRequest struct {
	ServerURL  *string
	PathParams UpdateSipCredentialListPathParams
	Request    *UpdateSipCredentialListRequestBodyUpdateSipCredentialListRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSipCredentialListSecurity
}

type UpdateSipCredentialListResponse struct {
	ContentType                         string
	StatusCode                          int64
	APIV2010AccountSipSipCredentialList *shared.APIV2010AccountSipSipCredentialList
}
