package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCommandServerList = []string{
	"https://wireless.twilio.com",
}

type DeleteCommandPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCommandSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCommandRequest struct {
	ServerURL  *string
	PathParams DeleteCommandPathParams
	Security   DeleteCommandSecurity
}

type DeleteCommandResponse struct {
	ContentType string
	StatusCode  int64
}
