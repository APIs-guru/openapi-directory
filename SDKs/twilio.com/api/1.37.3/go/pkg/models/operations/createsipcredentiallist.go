package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSipCredentialListServerList = []string{
	"https://api.twilio.com",
}

type CreateSipCredentialListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateSipCredentialListCreateSipCredentialListRequest struct {
	FriendlyName string `form:"name=FriendlyName"`
}

type CreateSipCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSipCredentialListRequest struct {
	ServerURL  *string
	PathParams CreateSipCredentialListPathParams
	Request    *CreateSipCredentialListCreateSipCredentialListRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateSipCredentialListSecurity
}

type CreateSipCredentialListResponse struct {
	ContentType                         string
	StatusCode                          int64
	APIV2010AccountSipSipCredentialList *shared.APIV2010AccountSipSipCredentialList
}
