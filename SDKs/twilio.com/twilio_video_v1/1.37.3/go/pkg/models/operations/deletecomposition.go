package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteCompositionServerList = []string{
	"https://video.twilio.com",
}

type DeleteCompositionPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteCompositionSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteCompositionRequest struct {
	ServerURL  *string
	PathParams DeleteCompositionPathParams
	Security   DeleteCompositionSecurity
}

type DeleteCompositionResponse struct {
	ContentType string
	StatusCode  int64
}
