package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCompositionHookServers = []string{
	"https://video.twilio.com",
}

type DeleteCompositionHookPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCompositionHookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCompositionHookRequest struct {
	ServerURL  *string
	PathParams DeleteCompositionHookPathParams
	Security   DeleteCompositionHookSecurity
}

type DeleteCompositionHookResponse struct {
	ContentType string
	StatusCode  int64
}
