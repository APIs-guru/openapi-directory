package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateAccountServerList = []string{
	"https://api.twilio.com",
}

type UpdateAccountPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateAccountUpdateAccountRequest struct {
	FriendlyName *string                       `form:"name=FriendlyName"`
	Status       *shared.AccountEnumStatusEnum `form:"name=Status"`
}

type UpdateAccountSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateAccountRequest struct {
	ServerURL  *string
	PathParams UpdateAccountPathParams
	Request    *UpdateAccountUpdateAccountRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateAccountSecurity
}

type UpdateAccountResponse struct {
	ContentType     string
	StatusCode      int64
	APIV2010Account *shared.APIV2010Account
}
