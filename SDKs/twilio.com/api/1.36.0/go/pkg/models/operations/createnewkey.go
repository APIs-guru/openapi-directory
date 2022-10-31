package operations

import (
	"openapi/pkg/models/shared"
)

var CreateNewKeyServers = []string{
	"https://api.twilio.com",
}

type CreateNewKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
}

type CreateNewKeyCreateNewKeyRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type CreateNewKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateNewKeyRequest struct {
	ServerURL  *string
	PathParams CreateNewKeyPathParams
	Request    *CreateNewKeyCreateNewKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateNewKeySecurity
}

type CreateNewKeyResponse struct {
	ContentType           string
	StatusCode            int64
	APIV2010AccountNewKey *shared.APIV2010AccountNewKey
}
