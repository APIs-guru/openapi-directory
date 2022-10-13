package operations

import (
	"openapi/pkg/models/shared"
)

var CreateSafelistServers = []string{
	"https://verify.twilio.com",
}

type CreateSafelistRequestBodyCreateSafelistRequest struct {
	PhoneNumber string `form:"name=PhoneNumber"`
}

type CreateSafelistSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateSafelistRequest struct {
	ServerURL *string
	Request   *CreateSafelistRequestBodyCreateSafelistRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateSafelistSecurity
}

type CreateSafelistResponse struct {
	ContentType      string
	StatusCode       int64
	VerifyV2Safelist *shared.VerifyV2Safelist
}
