package operations

import (
	"openapi/pkg/models/shared"
)

var CreateShortCodeServers = []string{
	"https://proxy.twilio.com",
}

type CreateShortCodePathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateShortCodeRequestBodyCreateShortCodeRequest struct {
	Sid string `form:"name=Sid"`
}

type CreateShortCodeSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateShortCodeRequest struct {
	ServerURL  *string
	PathParams CreateShortCodePathParams
	Request    *CreateShortCodeRequestBodyCreateShortCodeRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateShortCodeSecurity
}

type CreateShortCodeResponse struct {
	ContentType             string
	StatusCode              int64
	ProxyV1ServiceShortCode *shared.ProxyV1ServiceShortCode
}
