package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteFaxMediaServers = []string{
	"https://fax.twilio.com",
}

type DeleteFaxMediaPathParams struct {
	FaxSid string `pathParam:"style=simple,explode=false,name=FaxSid"`
	Sid    string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteFaxMediaSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteFaxMediaRequest struct {
	ServerURL  *string
	PathParams DeleteFaxMediaPathParams
	Security   DeleteFaxMediaSecurity
}

type DeleteFaxMediaResponse struct {
	ContentType string
	StatusCode  int64
}
