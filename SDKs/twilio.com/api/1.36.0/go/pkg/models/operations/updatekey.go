package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateKeyServers = []string{
	"https://api.twilio.com",
}

type UpdateKeyPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	Sid        string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateKeyUpdateKeyRequest struct {
	FriendlyName *string `form:"name=FriendlyName"`
}

type UpdateKeySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateKeyRequest struct {
	ServerURL  *string
	PathParams UpdateKeyPathParams
	Request    *UpdateKeyUpdateKeyRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateKeySecurity
}

type UpdateKeyResponse struct {
	ContentType        string
	StatusCode         int64
	APIV2010AccountKey *shared.APIV2010AccountKey
}
