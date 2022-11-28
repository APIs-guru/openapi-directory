package operations

import (
	"openapi/pkg/models/shared"
)

var FetchSmsCommandServerList = []string{
	"https://supersim.twilio.com",
}

type FetchSmsCommandPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchSmsCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchSmsCommandRequest struct {
	ServerURL  *string
	PathParams FetchSmsCommandPathParams
	Security   FetchSmsCommandSecurity
}

type FetchSmsCommandResponse struct {
	ContentType          string
	StatusCode           int64
	SupersimV1SmsCommand *shared.SupersimV1SmsCommand
}
