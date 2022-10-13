package operations

import (
	"openapi/pkg/models/shared"
)

var FetchFaxMediaServers = []string{
	"https://fax.twilio.com",
}

type FetchFaxMediaPathParams struct {
	FaxSid string `pathParam:"style=simple,explode=false,name=FaxSid"`
	Sid    string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchFaxMediaSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchFaxMediaRequest struct {
	ServerURL  *string
	PathParams FetchFaxMediaPathParams
	Security   FetchFaxMediaSecurity
}

type FetchFaxMediaResponse struct {
	ContentType      string
	StatusCode       int64
	FaxV1FaxFaxMedia *shared.FaxV1FaxFaxMedia
}
