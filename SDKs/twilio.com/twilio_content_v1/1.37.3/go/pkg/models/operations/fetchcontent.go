package operations

import (
	"openapi/pkg/models/shared"
)

var FetchContentServerList = []string{
	"https://content.twilio.com",
}

type FetchContentPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchContentSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchContentRequest struct {
	ServerURL  *string
	PathParams FetchContentPathParams
	Security   FetchContentSecurity
}

type FetchContentResponse struct {
	ContentType      string
	StatusCode       int64
	ContentV1Content *shared.ContentV1Content
}
