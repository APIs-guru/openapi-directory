package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteSipCredentialListServerList = []string{
	"https://api.twilio.com",
}

type DeleteSipCredentialListPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteSipCredentialListSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteSipCredentialListRequest struct {
	ServerURL  *string
	PathParams DeleteSipCredentialListPathParams
	Security   DeleteSipCredentialListSecurity
}

type DeleteSipCredentialListResponse struct {
	ContentType string
	StatusCode  int64
}
