package operations

import (
	"openapi/pkg/models/shared"
)

var FetchIPCommandServerList = []string{
	"https://supersim.twilio.com",
}

type FetchIPCommandPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchIPCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchIPCommandRequest struct {
	ServerURL  *string
	PathParams FetchIPCommandPathParams
	Security   FetchIPCommandSecurity
}

type FetchIPCommandResponse struct {
	ContentType         string
	StatusCode          int64
	SupersimV1IPCommand *shared.SupersimV1IPCommand
}
