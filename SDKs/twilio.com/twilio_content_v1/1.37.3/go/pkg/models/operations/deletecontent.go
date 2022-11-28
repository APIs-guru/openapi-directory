package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteContentServerList = []string{
	"https://content.twilio.com",
}

type DeleteContentPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteContentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteContentRequest struct {
	ServerURL  *string
	PathParams DeleteContentPathParams
	Security   DeleteContentSecurity
}

type DeleteContentResponse struct {
	ContentType string
	StatusCode  int64
}
